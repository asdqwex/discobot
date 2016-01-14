/* global escape */
'use strict'
const describe = global.describe
const it = global.it
import assert from 'assert'
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1, 2, 3].indexOf(5))
      assert.equal(-1, [1, 2, 3].indexOf(0))
    })
  })
})
