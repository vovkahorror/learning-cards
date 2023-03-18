import baseStyled, { createGlobalStyle, ThemedStyledInterface } from 'styled-components'

export const theme = {
  colors: {
    primary: '#366EFF',
    secondary: '#14AAF5',
    success: '#2FBA20',
    warning: '#FF9C02',
    danger: '#FF3F21',

    bgPrimary: '#f5f9fa',
    bgSecondary: '#F6F8F9',

    dark: '#282A37',
    light: '#ffffff',
    gray: '#808080',

    fontPrimary: '#000',
    fontSecondary: '#6F7782',
    fontWhite: '#fff',
    fontMain: '#162938',
    invisible: 'transparent',

    inputBorderColor: '#cccccc',
  },
  btn: {
    primary: {
      bg: '#162938',
      bgHover: '#144160',
      borderColor: '#162938',
      color: '#ffffff',
      boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.1), -1px -1px 2px rgba(0, 0, 0, 0.1)',
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
        background-color: var(--rs-body);
        color: var(--rs-text-primary);
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    a {
      text-decoration: none;
      color: ${theme.colors.dark};
      font-weight: 500;
      font-size: 14px;
    }
    h1 {
      font-weight: 600;
      font-size: 26px;
      line-height: 32px;
      color: ${theme.colors.fontMain};
    }
    h2 {
      font-weight: 600;
      font-size: 22px;
      line-height: 27px;
    }
	#root {
	  	min-height: 100vh;
	}

`

export type ThemeType = typeof theme
export const styled = baseStyled as ThemedStyledInterface<ThemeType>
