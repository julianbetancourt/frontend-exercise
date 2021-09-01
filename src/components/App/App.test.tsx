import {
  fireEvent,
  getByTestId,
  getByText,
  render,
  screen,
  waitFor,
} from "@testing-library/react"
import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { rest } from "msw"
import userEvent from "@testing-library/user-event"

import App, { SortValues } from "./App"

import {
  getPlanetsWithDifferentPopulation,
  getTwoPlanetsResponse,
  planetMock,
} from "../../mocks/planets"
import { server } from "../../mocks/server"

const queryClient = new QueryClient()
const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe("<App>", () => {
  it("renders without crashing", () => {
    render(
      <Wrapper>
        <App />
      </Wrapper>
    )
  })

  it("renders loading if data is not present yet", async () => {
    render(
      <Wrapper>
        <App />
      </Wrapper>
    )

    expect(screen.getByText(/Loading/i)).toBeInTheDocument()

    await waitFor(() => screen.getByText(planetMock.name))
  })

  it("renders error message if theres an issue with GET planets", async () => {
    // Fail GET planets
    server.use(
      rest.get("https://swapi.dev/api/planets", (req, res, ctx) => {
        return res.once(
          ctx.status(500),
          ctx.json({ detail: "There was an error" })
        )
      })
    )

    render(
      <Wrapper>
        <App />
      </Wrapper>
    )

    await waitFor(() => screen.getByText(/There was an error/i), {
      timeout: 4000,
    })

    expect(screen.getByText(/There was an error/i)).toBeInTheDocument()
  })

  it("renders planets for first page", async () => {
    render(
      <Wrapper>
        <App />
      </Wrapper>
    )
    await waitFor(() => screen.getByText(planetMock.name))
    expect(screen.getByText(planetMock.name)).toBeInTheDocument()
  })

  it("should not be able to click back if page is 1", async () => {
    render(
      <Wrapper>
        <App />
      </Wrapper>
    )
    await waitFor(() => screen.getByText(planetMock.name))

    fireEvent.click(screen.getByText(/Back/i))

    expect(screen.getByText("Current page: 1")).toBeInTheDocument()
  })

  it("should be able to go to the next page and see correct planets", async () => {
    render(
      <Wrapper>
        <App />
      </Wrapper>
    )
    await waitFor(() => screen.getByText(planetMock.name))

    fireEvent.click(screen.getByText(/Next/i))
    await waitFor(() => screen.getByText("Planet in page 2"))
    expect(screen.getByText("Current page: 2")).toBeInTheDocument()
    expect(screen.getByText("Planet in page 2")).toBeInTheDocument()
  })

  it("should be able to filter out when using the search bar", async () => {
    server.use(
      rest.get("https://swapi.dev/api/planets", (req, res, ctx) => {
        console.log("INTERCEPTING SEARCH")
        return res.once(ctx.json(getTwoPlanetsResponse()))
      })
    )

    const { debug } = render(
      <Wrapper>
        <App />
      </Wrapper>
    )

    await waitFor(() => screen.getByText(planetMock.name))
    await waitFor(() => screen.getByText("Second planet"))

    fireEvent.change(screen.getByPlaceholderText(/Search/i), {
      target: {
        value: "Second planet",
      },
    })

    await waitFor(() => screen.getByText("Second planet"))
    expect(screen.queryByText(planetMock.name)).not.toBeInTheDocument()
    expect(screen.getByText("Second planet")).toBeInTheDocument()
  })

  it("should sort by a given criteria", async () => {
    server.use(
      rest.get("https://swapi.dev/api/planets", (req, res, ctx) => {
        console.log("INTERCEPTING SEARCH")
        return res.once(ctx.json(getPlanetsWithDifferentPopulation()))
      })
    )

    const { queryAllByTestId } = render(
      <Wrapper>
        <App />
      </Wrapper>
    )

    await waitFor(() => screen.getByText(planetMock.name))
    await waitFor(() => screen.getByText("Second planet"))

    // Unsorted
    const populations = queryAllByTestId("population-value")
    expect(populations[0]).toHaveTextContent("200000")
    expect(populations[1]).toHaveTextContent("1")

    // Select population
    userEvent.selectOptions(
      screen.getByTestId("sorter-select"),
      SortValues.population
    )

    // Sorted!
    const newPopulations = queryAllByTestId("population-value")
    expect(newPopulations[0]).toHaveTextContent("1")
    expect(newPopulations[1]).toHaveTextContent("200000")
  })

  it("marks planet as reviewed", () => {
    const { debug, getAllByText } = render(
      <Wrapper>
        <App />
      </Wrapper>
    )

    fireEvent.click(getAllByText(/Mark as reviewed/i)[0])

    expect(screen.getAllByText(/Reviewed/i)[0]).toBeInTheDocument()
  })
})
