import React, { Dispatch, SetStateAction, useEffect } from "react"
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

  useEffect(() => {
    // Very likely the user will click on next
    // so we can prefetch the data for the upcoming page
    // and make it look faster ⚡
    queryClient.prefetchQuery(
      ["planets", currentPage + 1],
      () => Planets.getAll({ page: currentPage + 1 }),
      {
        staleTime: 10000,
      }
    )
  }, [currentPage, queryClient])

  return (
    <PaginationContainer>
      <span className="pagination__indicator">Current page: {currentPage}</span>
      <div>
        <PaginationButton
          onClick={(event) => {
            setSearchValue("")
            if (hasPrevious) {
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
        >
          Next
        </PaginationButton>
      </div>
    </PaginationContainer>
  )
}
