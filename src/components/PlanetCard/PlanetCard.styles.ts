import styled, { css } from "styled-components"

export const Card = styled.div`
  background: #fff;
  padding: 15px 20px;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;

  button {
    margin-top: auto;
  }

  @media (min-width: 600px) {
    width: 250px;
    margin: 0 10px 15px;
  }

  @media (min-width: 1237px) {
    margin: 0 8px 15px;
  }
`

export const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 10px;
`

export const Stat = styled.ol`
  display: flex;
  margin-bottom: 10px;
  width: 100%;
`

export const StatName = styled.div`
  color: #949bac;
  width: 100px;
  font-weight: 700;
  word-wrap: break-word;
  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

export const StatValue = styled.span`
  width: 50%;
  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

export const StatsContainer = styled.ul``

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (min-width: 1237px) {
    width: 1100px;
    justify-content: end;
  }
`

export const Button = styled.button<{ isReviewed: boolean }>`
  ${(p) =>
    p.isReviewed &&
    css`
      opacity: 0.8;
      cursor: default;
    `}
`
