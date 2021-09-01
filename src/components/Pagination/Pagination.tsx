import React, { Dispatch, SetStateAction } from "react"
import { useQueryClient } from "react-query"
import { Planets } from "../../api/planets"
import { PaginationButton, PaginationContainer } from "./Pagination.styles"

interface Props {
  currentPage: number
  hasPrevious: boolean
  hasNext: boolean
  setCurrentPage: Dispatch<SetStateAction<number>>
  setSearchValue: Dispatch<SetStateAction<string>>
  searchValue: string
}

export function Pagination({
  currentPage,
  hasPrevious,
  hasNext,
  setCurrentPage,
  searchValue,
  setSearchValue,
}: Props) {
  const queryClient = useQueryClient()

  return (
    <PaginationContainer>
      <span className="pagination__indicator">Current page: {currentPage}</span>
      <div>
        <PaginationButton
          onClick={(event) => {
            console.log(hasPrevious)
            setSearchValue("")
            if (hasPrevious) {
              console.log("clicked back and valid!")
              setCurrentPage((page) => page - 1)
            }
          }}
          enabled={hasPrevious}
        >
          Back
        </PaginationButton>
        <PaginationButton
          enabled={hasNext}
          onClick={(event) => {
            setSearchValue("")
            if (hasNext) {
              setCurrentPage((page) => page + 1)
            }
          }}
          onMouseOver={(event) => {
            queryClient.prefetchQuery(
              ["planets", searchValue, currentPage + 1],
              () => Planets.getAll({ page: currentPage }),
              {
                staleTime: 10000,
              }
            )
          }}
        >
          Next
        </PaginationButton>
      </div>
    </PaginationContainer>
  )
}
