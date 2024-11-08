import React from 'react'
import { render, fireEvent, screen } from '../test-utils'
import { CreateEntry } from '../../components/CreateEntry'

describe('CreateEntry', () => {
  it('should render the form', () => {
    render(<CreateEntry />)
    expect(screen.getByPlaceholderText('Écris ton message')).toBeInTheDocument()
    expect(screen.getByText('Protéger par mot de passe')).toBeInTheDocument()
    expect(screen.getByText('Sauvegarder')).toBeInTheDocument()
  })

  it('should submit the form', () => {
    render(<CreateEntry />)
    const textarea = screen.getByPlaceholderText('Écris ton message')
    const submitButton = screen.getByText('Sauvegarder')

    fireEvent.change(textarea, { target: { value: 'Bonjour' } })
    fireEvent.click(submitButton)

    expect(textarea).toHaveValue('')
  })
})