import React from "react"
import { Text } from "./App.styles"

interface Props {
  error?: string | null
  isLoading: boolean
}

export function NoPlanets({ error, isLoading }: Props) {
  if (isLoading) {
    return <Text>Loading...</Text>
  }

  if (error) {
    return <Text>{error}</Text>
  }

  return <Text>There has been an error, try again!</Text>
}
