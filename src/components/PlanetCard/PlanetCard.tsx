import { Planet } from "../../interfaces/Planet"
import {
  Button,
  Card,
  CardTitle,
  Stat,
  StatName,
  StatValue,
} from "./PlanetCard.styles"

interface Props {
  planet: Planet
  isReviewed?: boolean
  onReviewClick: (url: string) => void
}

export function PlanetCard({
  planet,
  isReviewed = false,
  onReviewClick,
}: Props) {
  const { name, diameter, climate, population, terrain, url } = planet

  return (
    <Card>
      <CardTitle>{name}</CardTitle>
      <ul>
        <Stat>
          <StatName>Diameter:</StatName>
          <StatValue>{diameter}</StatValue>
        </Stat>
        <Stat>
          <StatName>Climate:</StatName>
          <StatValue>{climate}</StatValue>
        </Stat>
        <Stat>
          <StatName>Population:</StatName>
          <StatValue data-testid="population-value">{population}</StatValue>
        </Stat>
        <Stat>
          <StatName>Terrain:</StatName>
          <StatValue>{terrain}</StatValue>
        </Stat>
      </ul>
      <Button
        onClick={() => !isReviewed && onReviewClick(url)}
        isReviewed={isReviewed}
      >
        {isReviewed ? "Reviewed!" : "Mark as reviewed"}
      </Button>
    </Card>
  )
}
