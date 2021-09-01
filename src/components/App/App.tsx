import { useMemo, useState } from "react"
import { usePlanets } from "../../hooks/use-planets"
import { Planet } from "../../interfaces/Planet"
import { Header } from "../Header/Header"
import { Pagination } from "../Pagination/Pagination"
import { PlanetsContainer } from "../PlanetCard/PlanetsContainer"
import { SearchBar } from "../Searchbar/SearchBar"
import { Sorter } from "../Sorter/Sorter"
import { Main } from "./App.styles"
import { NoPlanets } from "./NoPlanets"

export enum SortValues {
  none = "none",
  population = "population",
  diameter = "diameter",
}

interface GetPlanets {
  planets: Planet[]
  name: string
  sortBy: SortValues
}

function getFilteredPlanets({ planets, name, sortBy }: GetPlanets) {
  if (name === "" && sortBy === SortValues.none) return planets

  let newp = planets.filter((planet) =>
    planet.name.toLowerCase().includes(name.toLowerCase())
  )

  if (sortBy !== SortValues.none) {
    newp = newp.sort((a, b) => {
      return Number(a[sortBy]) - Number(b[sortBy])
    })
  }

  return newp
}

function App() {
  const [searchValue, setSearchValue] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [sorter, setSorter] = useState<SortValues>(SortValues.none)

  const { data, error, isLoading } = usePlanets(currentPage)

  const filteredPlanets = useMemo(
    () =>
      getFilteredPlanets({
        planets: data?.results ?? [],
        name: searchValue,
        sortBy: sorter,
      }),
    [searchValue, data?.results, sorter]
  )

  return (
    <div>
      <Header />

      <Main>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <Sorter sorter={sorter} setSorter={setSorter} />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          hasPrevious={data?.previous || false}
          hasNext={Boolean(data?.next) || false}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        {isLoading || error ? (
          <NoPlanets error={error?.message ?? null} isLoading={isLoading} />
        ) : (
          <PlanetsContainer planets={filteredPlanets} />
        )}
      </Main>
    </div>
  )
}

export default App
