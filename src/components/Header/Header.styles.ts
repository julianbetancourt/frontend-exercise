import styled from "styled-components"

export const StyledHeader = styled.header`
  background: #000;
  height: 70px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  @media (min-width: ${(p) => p.theme.screenBreaks.lg}) {
    justify-content: start;
  }
`

export const HeaderContainer = styled.div`
  display: flex;

  & > svg {
    max-width: 180px;
    height: auto;
    margin-right: 5px;
  }

  & > span {
    text-transform: uppercase;
    align-self: flex-end;
    font-size: 0.8rem;
  }
`
