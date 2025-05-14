import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from './Footer.tsx'

describe('<Footer />', () => {
    test('Footer mounts properly', () => {
      const wrapper = render(<Footer />)
      expect(wrapper).toBeTruthy()

      // Get by p
      const p = wrapper.container.querySelector('p')
      expect(p?.textContent).toBe('© Copyright Vee Valand.')
    })
  });