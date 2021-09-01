import styled from "styled-components"

export const Input = styled.input`
  width: 100%;
  height: 40px;
  margin: 10px 0 30px;
  @media (min-width: ${(p) => p.theme.screenBreaks.lg}) {
    width: 400px;
    margin: 30px 0 30px;
  }
`
