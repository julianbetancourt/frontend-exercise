import { Planet, PlanetsRequest } from "../interfaces/Planet"

export const planetMock: Planet = {
  name: "Tatooine",
  rotation_period: "23",
  orbital_period: "304",
  diameter: "10465",
  climate: "arid",
  gravity: "1 standard",
  terrain: "desert",
  surface_water: "1",
  population: "200000",
  residents: [
    "https://swapi.dev/api/people/1/",
    "https://swapi.dev/api/people/2/",
    "https://swapi.dev/api/people/4/",
    "https://swapi.dev/api/people/6/",
    "https://swapi.dev/api/people/7/",
    "https://swapi.dev/api/people/8/",
    "https://swapi.dev/api/people/9/",
    "https://swapi.dev/api/people/11/",
    "https://swapi.dev/api/people/43/",
    "https://swapi.dev/api/people/62/",
  ],
  films: [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/4/",
    "https://swapi.dev/api/films/5/",
    "https://swapi.dev/api/films/6/",
  ],
  created: new Date("2014-12-09T13:50:49.641000Z"),
  edited: new Date("2014-12-20T20:58:18.411000Z"),
  url: "https://swapi.dev/api/planets/1/",
}

export const createPlanetMock = (modifiers: Partial<Planet>) => {
  return {
    ...planetMock,
    ...modifiers,
  }
}

export const createPlanetsMock = (
  modifiers: Partial<PlanetsRequest>,
  newPlanets?: Planet[]
) => {
  const { next, previous } = modifiers
  const responseMock = {
    count: 60,
    next: next || "https://swapi.dev/api/planets/?page=2",
    previous: previous || null,
    results: newPlanets || [planetMock],
  }

  return responseMock
}

export const getTwoPlanetsResponse = () => {
  return createPlanetsMock({}, [
    planetMock,
    {
      ...planetMock,
      name: "Second planet",
    },
  ])
}

export const getPlanetsWithDifferentPopulation = () => {
  return createPlanetsMock({}, [
    planetMock,
    {
      ...planetMock,
      name: "Second planet",
      population: "1",
    },
  ])
}
