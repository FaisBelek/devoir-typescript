import React from 'react'
import { render, screen } from './test-utils'
import App from './../App'

describe('App', () => {
  it('should render the app', () => {
    render(<App />)
    expect(screen.getByText('Ecris et je garde ton message')).toBeInTheDocument()
  })
})