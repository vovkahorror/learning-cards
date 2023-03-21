import React from 'react'

import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

import { App } from 'app/App'
import { store } from 'app/store'

test('renders learn react link', () => {
  render(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  )
  const linkElement = screen.getByText(/loader.svg/i)

  expect(linkElement).toBeInTheDocument()
})
