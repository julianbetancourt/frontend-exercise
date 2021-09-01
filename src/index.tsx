import React from "react"
import ReactDOM from "react-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import reset from "styled-reset"

import App from "./components/App/App"
import reportWebVitals from "./reportWebVitals"
import { globalStyles, screenBreaks } from "./utils/styles"

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${globalStyles}
`

const queryClient = new QueryClient()
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{ screenBreaks }}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
