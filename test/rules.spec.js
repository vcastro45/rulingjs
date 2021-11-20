import ruling  from '../dist/index.js'
import { expect } from 'chai'
import 'mocha'

describe('RulingJS rules tests',
  () => {
    it('email', () => {
      const result = ruling.email('well.formatted@email.com')
      expect(result).to.equal(true);
    })
  })
