const calculator = require('../calculator')
const assert = require('assert')

describe('calculator', () => {
  it('should add', () => {
    assert(calculator.add(1, 1) === 2)
  })
})
