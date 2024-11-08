import React from 'react'
import { render, screen, fireEvent } from '../test-utils'
import { DiaryProvider, DiaryContext } from '../../context/DiaryContext'

describe('DiaryContext', () => {
  it('should add an entry', () => {
    render(
      <DiaryProvider>
        <DiaryContext.Consumer>
          {({ addEntry }) => (
            <div>
              <input
                placeholder="Écrivez votre message"
                onChange={(e) => addEntry(e.target.value, false)}
              />
              <button onClick={() => addEntry('Bonjour', false)}>Ajouter</button>
            </div>
          )}
        </DiaryContext.Consumer>
      </DiaryProvider>
    )

    const input = screen.getByPlaceholderText('Écrivez votre message')
    const addButton = screen.getByText('Ajouter')

    fireEvent.change(input, { target: { value: 'Bonjour' } })
    fireEvent.click(addButton)

    expect(screen.getByText('Bonjour')).toBeInTheDocument()
  })
})