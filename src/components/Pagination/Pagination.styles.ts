import styled from "styled-components"

export const PaginationContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  & > .pagination__indicator {
    color: white;
    margin-bottom: 10px;
  }
`

export const PaginationButton = styled.button<{ enabled: boolean }>`
  opacity: ${(p) => (p.enabled ? "1" : "0.8")};
  cursor: ${(p) => (p.enabled ? "pointer" : "default")};
  &:hover {
    background: ${(p) => (p.enabled ? "#1a344a" : "steelblue")};
  }
`
