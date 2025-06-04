import { describe, it, expect } from 'vitest'
import { getTransLink } from './lang'

describe('getTransLink', () => {
  it('returns slug for english language', () => {
    expect(getTransLink('en', 'article')).toBe('article')
  })
  it('adds prefix for other languages', () => {
    expect(getTransLink('de', 'artikel')).toBe('/de/artikel')
  })
})
