import styled from "styled-components"

export const Main = styled.main`
  width: 90%;
  margin: 0 auto;

  @media (min-width: ${(p) => p.theme.screenBreaks.lg}) {
    width: 1100px;
  }
`

export const Text = styled.span`
  color: white;
`
