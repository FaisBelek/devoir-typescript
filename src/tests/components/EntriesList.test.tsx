import React from 'react'
import { render, screen } from '../test-utils'
import { EntriesList } from '../../components/EntriesList'

describe('EntriesList', () => {
  it('should render the list of entries', () => {
    render(<EntriesList />)
    expect(screen.getByText('Liste des entrées')).toBeInTheDocument()
  })

  it('should delete an entry', () => {
    render(<EntriesList />)
    const deleteButton = screen.getByText('Supprimer')
  })
})