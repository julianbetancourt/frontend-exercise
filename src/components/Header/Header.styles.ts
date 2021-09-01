import styled from "styled-components"

export const StyledHeader = styled.header`
  background: #000;
  height: 70px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  @media (min-width: 1237px) {
    justify-content: start;
  }
`

export const HeaderContainer = styled.div`
  display: flex;

  & > svg {
    width: 158px;
    height: auto;
    margin-right: 10px;
  }

  & > span {
    text-transform: uppercase;
    align-self: flex-end;
  }
`
