import { useQuery } from "react-query"
import { Planets } from "../api/planets"
import { PlanetsRequest } from "../interfaces/Planet"

export function usePlanets(page: number) {
  return useQuery<PlanetsRequest, { message: string }>(
    ["planets", page],
    () => Planets.getAll({ page }),
    {
      enabled: true,
      retry: false,
    }
  )
}
