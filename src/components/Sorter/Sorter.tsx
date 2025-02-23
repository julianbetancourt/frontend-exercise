import React, { Dispatch, SetStateAction } from "react"
import { SortValues } from "../App/App"
import { StyledSorter } from "./Sorter.styles"

interface Props {
  sorter: SortValues
  setSorter: Dispatch<SetStateAction<SortValues>>
}

export function Sorter({ sorter, setSorter }: Props) {
  return (
    <StyledSorter>
      Sort by
      <select
        value={sorter}
        onChange={(e) => {
          setSorter(e.target.value as SortValues)
        }}
        data-testid="sorter-select"
      >
        <option value={SortValues.none} data-testid={SortValues.none}>
          None
        </option>
        <option value={SortValues.diameter} data-testid={SortValues.diameter}>
          Diameter
        </option>
        <option
          value={SortValues.population}
          data-testid={SortValues.population}
        >
          population
        </option>
      </select>
    </StyledSorter>
  )
}
