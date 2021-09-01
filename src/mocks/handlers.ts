import { rest } from "msw"
import { createPlanetMock, createPlanetsMock } from "./planets"

export const handlers = [
  rest.get("https://swapi.dev/api/planets", (req, res, ctx) => {
    const query = req.url.searchParams
    const page = query.get("page")
    if (page === "2") {
      return res(
        ctx.status(200),
        ctx.json(
          createPlanetsMock({ previous: "previouspage.com" }, [
            createPlanetMock({ name: "Planet in page 2" }),
          ])
        )
      )
    }

    if (page === "1") {
      return res(ctx.status(200), ctx.json(createPlanetsMock({})))
    }
  }),
]
