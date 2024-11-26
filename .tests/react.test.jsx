import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../src/App'

describe('1. Component Structure', () => {
  it('has the correct title', () => {
    render(<App />)
    expect(screen.getByText('CodeChef Labs')).toBeInTheDocument()
  })
})

describe('2. Button Implementation', () => {
  it('renders Get Started button correctly', () => {
    render(<App />)
    const button = screen.getByText('Get Started')
    expect(button).toHaveClass('primary-button')
  })
})

