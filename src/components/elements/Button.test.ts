import { describe, it, expect } from 'vitest'
import { render } from '@astrojs/test'
import Button from './Button.astro'

describe('Button component', () => {
  it('renders provided label', async () => {
    const { getByText } = await render(Button, { props: { label: 'Read more', link: { cached_url: '#' } } })
    expect(getByText('Read more')).toBeTruthy()
  })
})
