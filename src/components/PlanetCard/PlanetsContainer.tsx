import { PlanetCard } from "./PlanetCard"
import { CardsContainer } from "./PlanetCard.styles"
import { Planet } from "../../interfaces/Planet"
import { useState } from "react"

interface Props {
  planets: Planet[]
}
export function PlanetsContainer({ planets }: Props) {
  const [reviewedPlanets, setReviewedPlanets] = useState<Planet["url"][]>([])

  function onReviewClick(url: Planet["url"]) {
    setReviewedPlanets((reviewed) => [...reviewed, url])
  }
  return (
    <CardsContainer>
      {planets.map((planet: Planet) => (
        <PlanetCard
          key={planet.url}
          planet={planet}
          onReviewClick={onReviewClick}
          isReviewed={reviewedPlanets.includes(planet.url)}
        />
      ))}
    </CardsContainer>
  )
}
