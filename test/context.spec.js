import ruling  from '../dist/index.js'
import { expect } from 'chai'
import 'mocha'

describe('RulingJS context tests', () => {
  it('can be ran as a callback', function () {
    const result = function (cb) { return cb() }(ruling.required())
    expect(result).to.be.equal('This field is required')
  })
})
