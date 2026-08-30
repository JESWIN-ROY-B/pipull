import assert from 'node:assert/strict'
import test from 'node:test'
import { canTransitionJob, canVerifyOtp, isRateLimited, validateCheckout } from './pipull-safety.ts'

test('rate limits OTP attempts within a window', () => {
  assert.equal(isRateLimited(5, 1000, 1000), true)
  assert.equal(isRateLimited(5, 901_000, 1000), false)
})

test('validates OTP shape and attempts', () => {
  assert.equal(canVerifyOtp('123456', '123456', 0), true)
  assert.equal(canVerifyOtp('12345', '123456', 0), false)
  assert.equal(canVerifyOtp('123456', '123456', 5), false)
})

test('guards job transitions', () => {
  assert.equal(canTransitionJob('requested', 'accepted'), true)
  assert.equal(canTransitionJob('completed', 'in_progress'), false)
})

test('validates checkout totals and quantities', () => {
  assert.deepEqual(validateCheckout([{ price: 15 }, { price: 10, quantity: 2 }]), { ok: true, total: 35 })
  assert.equal(validateCheckout([{ price: 15, quantity: 0 }]).ok, false)
})
