import React, { Dispatch, SetStateAction } from "react"
import { Input } from "./SearchBar.styles"

interface Props {
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
}

export function SearchBar({ searchValue, setSearchValue }: Props) {
  return (
    <Input
      type="text"
      placeholder="Search by name..."
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  )
}
