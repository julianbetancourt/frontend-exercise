import React from "react"
import { ReactComponent as Logo } from "./logo.svg"
import { HeaderContainer, StyledHeader } from "./Header.styles"

export function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo />
        <span>Planets</span>
      </HeaderContainer>
    </StyledHeader>
  )
}
