import assert from 'node:assert/strict'
import { test } from 'node:test'
import { getTransLink } from './lang.js'

test('returns slug for English', () => {
  // Arrange
  const language = 'en'
  const slug = 'home'
  // Act
  const result = getTransLink(language, slug)

  // Assert
  assert.equal(result, 'home')
})

test('prefixes slug with language for non-English', () => {
  // Arrange

  const language = 'de'
  const slug = 'home'

  // Act

  const result = getTransLink(language, slug)

  // Assert

  assert.equal(result, '/de/home')
})
