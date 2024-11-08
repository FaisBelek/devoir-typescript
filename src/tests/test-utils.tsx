import React, { ReactNode } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { DiaryProvider } from '../context/DiaryContext'

const customRender = (
  ui: React.ReactElement, 
  options?: Omit<RenderOptions, 'wrapper'>
) =>
  render(ui, {
    wrapper: ({ children }: { children: ReactNode }) => (
      <DiaryProvider>{children}</DiaryProvider>
    ),
    ...options,
  })

export * from '@testing-library/react'
export { customRender as render }