// import { useContext } from 'react'
// import { ThemeContext } from '../context/index'
import { useTheme } from '../hooks'
import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`

    *{
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body{
        background-color: ${({ isDarkMode }) =>
          isDarkMode ? '#2f2e41' : '#f9f9fc'};
        margin: 0;
        padding-inline: 15px;
    }
`
function GlobalStyle() {
  const { theme } = useTheme()

  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
