import baseStyled, { createGlobalStyle, ThemedStyledInterface } from 'styled-components'

export const theme = {
  colors: {
    primary: '#366EFF',
    secondary: '#14AAF5',
    success: '#2FBA20',
    warning: '#FF9C02',
    danger: '#FF3F21',

    bgPrimary: '#F9F9FA',
    bgSecondary: '#F6F8F9',

    dark: '#282A37',
    light: '#ffffff',

    fontPrimary: '#000',
    fontSecondary: '#6F7782',
    fontWhite: '#fff',

    inputBorderColor: '#cccccc',
  },
  btn: {
    primary: {
      bg: '#366EFF',
      borderColor: '#366EFF',
      color: '#ffffff',
      boxShadow:
        '0px 4px 18px rgba(54, 110, 255, 0.35), inset 0px 1px 0px rgba(255, 255, 255, 0.3)',
    },
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
        color: ${theme.colors.dark};
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
