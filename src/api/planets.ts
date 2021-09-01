import axios from "axios"

const PLANETS_BASE_URL = "https://swapi.dev"

async function getAll({ page }: { page: number }) {
  try {
    const res = await axios(`${PLANETS_BASE_URL}/api/planets`, {
      params: {
        page,
      },
    })

    return res.data
  } catch (err) {
    throw new Error(`There was an error getting the planets for page ${page}`)
  }
}

export const Planets = { getAll }
