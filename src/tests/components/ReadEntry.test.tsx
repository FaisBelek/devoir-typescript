import React from 'react'
import { render, screen, fireEvent } from '../test-utils'
import { ReadEntry } from '../../components/ReadEntry'

describe('ReadEntry', () => {
  it('should render the entry', () => {
    render(<ReadEntry />)
    expect(screen.getByText('Lecture d\'une entrée')).toBeInTheDocument()
  })

  it('should decrypt the entry', () => {
    render(<ReadEntry />)
    const input = screen.getByPlaceholderText('Entrez le mot de passe')
    const submitButton = screen.getByText('Déchiffrer')

    fireEvent.change(input, { target: { value: 'motdepasse' } })
    fireEvent.click(submitButton)

    expect(submitButton).toBeDisabled()
  })
})