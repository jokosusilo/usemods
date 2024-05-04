import { expect, test } from 'vitest'
import * as mod from './generators'

test('generateNumber', () => {
    expect(mod.generateNumber(5)).toHaveLength(5)
    expect(mod.generateNumber(10)).toHaveLength(10)
    expect(mod.generateNumber(15)).toHaveLength(15)
})

test('generateNumberBetween', () => {
    expect(mod.generateNumberBetween(5, 10)).toBeGreaterThanOrEqual(5)
    expect(mod.generateNumberBetween(5, 10)).toBeLessThanOrEqual(10)
    expect(mod.generateNumberBetween(10, 15)).toBeGreaterThanOrEqual(10)
    expect(mod.generateNumberBetween(10, 15)).toBeLessThanOrEqual(15)
})


test('generateUuid', () => {
    expect(mod.generateUuid()).toHaveLength(36)
    expect(mod.generateUuid()).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)  
})

test('generateShortId', () => {
    expect(mod.generateShortId()).toHaveLength(36)
    expect(mod.generateShortId()).toMatch(/^[0-9a-zA-Z]{36}$/)
})

test('generatePassword', () => {
    expect(mod.generatePassword()).toHaveLength(12)
    expect(mod.generatePassword()).toMatch(/^[0-9a-zA-Z]{12}$/)
    expect(mod.generatePassword(8)).toHaveLength(8)
    expect(mod.generatePassword(8)).toMatch(/^[0-9a-zA-Z]{8}$/)
})


