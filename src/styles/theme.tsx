import baseStyled, { createGlobalStyle, ThemedStyledInterface } from 'styled-components'

export const theme = {
  colors: {
    primary: '#796EFF',
    secondary: '#14AAF5',
    success: '#2FBA20',
    warning: '#FF9C02',
    danger: '#FF3F21',

    bgPrimary: '#E2E8F0',
    bgSecondary: '#F6F8F9',

    dark: '#282A37',
    light: '#ffffff',

    fontPrimary: '#000',
    fontSecondary: '#6F7782',
    fontWhite: '#fff',
  },
}

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: ${theme.colors.bgPrimary};
        color: #bfc9d9;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
	#root {
	  	min-height: 100vh;
	}

`

export type ThemeType = typeof theme
export const styled = baseStyled as ThemedStyledInterface<ThemeType>
