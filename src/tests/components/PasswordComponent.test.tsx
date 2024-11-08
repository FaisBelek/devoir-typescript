import React from 'react'
import { render, screen, fireEvent } from '../test-utils'
import { PasswordComponent } from '../../components/PasswordComponent'

describe('PasswordComponent', () => {
  it('should validate the password', () => {
    render(<PasswordComponent correctPassword="motdepasse" onSuccess={() => {}} onCancel={() => {}} />)
    const input = screen.getByPlaceholderText('Entrez le mot de passe')
    const submitButton = screen.getByText('Valider')

    fireEvent.change(input, { target: { value: 'motdepasse' } })
    fireEvent.click(submitButton)

    expect(submitButton).toBeDisabled()
  })
})