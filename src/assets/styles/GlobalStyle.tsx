import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.color.background};
    }
`

export default GlobalStyle
