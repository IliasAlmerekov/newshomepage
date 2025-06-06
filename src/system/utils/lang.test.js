import assert from 'node:assert/strict';
import { test } from 'node:test';
import { getTransLink } from './lang.js';

test('returns slug for English', () => {
  assert.equal(getTransLink('en', 'home'), 'home');
});

test('prefixes slug with language for non-English', () => {
  assert.equal(getTransLink('de', 'home'), '/de/home');
});
