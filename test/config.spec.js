import ruling  from '../dist/index.js'
import { expect } from 'chai'
import 'mocha'
import fr from '../dist/locale/fr.js'

describe('RulingJS config tests', () => {
  it('should return default message', function () {
    const result = ruling.required(null)
    expect(result).to.be.equal('This field is required')
  })

  it('should return fr message', function () {
    const rulingFr = ruling.create({
      lang: fr
    })
    const result = rulingFr.required(null)
    expect(result).to.be.equal('Ce champ est obligatoire')
  })
})
