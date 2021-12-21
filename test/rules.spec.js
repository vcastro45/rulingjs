import ruling  from '../dist/index.js'
import { expect } from 'chai'
import 'mocha'

describe('RulingJS rules tests', () => {
  describe('#Email', () => {
    it('Well formatted email', function () {
      const result = ruling.email('well.formatted@email.com')
      expect(result).to.equal(true)
    })

    it('Not well formatted email', function () {
      const result = ruling.email('stupid@email')
      expect(result).to.be.a('string')
    })
  })

  describe('#isCapitalOrNumber', () => {
    it('should be capitals or numbers', function () {
      expect(
        ruling.isCapitalOrNumber('ABC123')
      ).to.equal(true)

      expect(
        ruling.isCapitalOrNumber('ABC123')
      ).to.equal(true)

      expect(
        ruling.isCapitalOrNumber('456ABC')
      ).to.equal(true)

      expect(
        ruling.isCapitalOrNumber('A1B2C3')
      ).to.equal(true)
    })

    it('should return an error message', function () {
      expect(
        ruling.isCapitalOrNumber('A1B 2C3')
      ).to.be.a('string')

      expect(
        ruling.isCapitalOrNumber('A1B2c3')
      ).to.be.a('string')

      expect(
        ruling.isCapitalOrNumber('abc')
      ).to.be.a('string')

      expect(
        ruling.isCapitalOrNumber('abc123')
      ).to.be.a('string')
    })
  })

  describe('#isCapital', () => {
    it('should be capitals', function () {
      expect(
        ruling.isCapital('ABC')
      ).to.equal(true)
    })

    it('should return an error message', function () {
      expect(
        ruling.isCapital('ABC123')
      ).to.be.a('string')

      expect(
        ruling.isCapital('AB C')
      ).to.be.a('string')

      expect(
        ruling.isCapital('abc')
      ).to.be.a('string')

      expect(
        ruling.isCapital('abc123')
      ).to.be.a('string')
    })
  })

  describe('#isDefined', () => {
    it('should be defined', function () {
      expect(
        ruling.isDefined('it is defined')
      ).to.equal(true)

      expect(
        ruling.isDefined({
          prop: 'is defined'
        })
      ).to.equal(true)
    })

    it('should return an error message', function () {
      expect(
        ruling.isDefined(undefined)
      ).to.be.a('string')

      expect(
        ruling.isDefined(null)
      ).to.be.a('string')
    })
  })

  describe('#maxLength', () => {
    it('should not exceed length', function () {
      expect(
        ruling.maxLength(5)('Hello')
      ).to.equal(true)

      expect(
        ruling.maxLength(5)('less')
      ).to.equal(true)
    })

    it('should return an error message', function () {
      expect(
        ruling.maxLength(4)('Hello')
      ).to.be.a('string')
    })
  })

  describe('#minLength', () => {
    it('should exceed length', function () {
      expect(
        ruling.minLength(5)('Hello')
      ).to.equal(true)

      expect(
        ruling.minLength(5)('more than 5')
      ).to.equal(true)
    })

    it('should return an error message', function () {
      expect(
        ruling.minLength(6)('Hello')
      ).to.be.a('string')
    })
  })

  describe('#notContain', () => {
    it('should not contain specific characters', function () {
      expect(
        ruling.notContain(['a', 'b', 'c'])('Hello world')
      ).to.equal(true)

      expect(
        ruling.notContain(['ow', 'foo'])('Hello world')
      ).to.equal(true)
    })

    it('should return an error message', function () {
      expect(
        ruling.notContain(['Hello', 'foo'])('Hello world')
      ).to.be.a('string')

      expect(
        ruling.notContain(['a', 'e'])('Hello world')
      ).to.be.a('string')

      expect(
        ruling.notContain(['d', 'e'])('Hello world')
      ).to.be.a('string')
    })
  })

  describe('#notEmpty', () => {
    it('should be filled', function () {
      expect(
        ruling.notEmpty('Hello world')
      ).to.equal(true)

      expect(
        ruling.notEmpty([
          'hello',
          'world'
        ])
      ).to.equal(true)

      expect(
        ruling.notEmpty([null])
      ).to.equal(true)

      expect(
        ruling.notEmpty([undefined])
      ).to.equal(true)
    })

    it('should return an error message', function () {
      expect(
        ruling.notEmpty('')
      ).to.be.a('string')

      expect(
        ruling.notEmpty([])
      ).to.be.a('string')
    })
  })

  describe('#required', () => {
    it('should be defined and filled', function () {
      expect(
        ruling.required('Hello world')
      ).to.equal(true)
    })

    it('should return an error message', function () {
      expect(
        ruling.required('')
      ).to.be.a('string')

      expect(
        ruling.required(null)
      ).to.be.a('string')

      expect(
        ruling.required(undefined)
      ).to.be.a('string')

      expect(
        ruling.required(0)
      ).to.be.a('string')
    })
  })

  describe('#strictLength', () => {
    it('should match length', function () {
      expect(
        ruling.strictLength(5)('Hello')
      ).to.equal(true)
    })

    it('should return an error message', function () {
      expect(
        ruling.strictLength(4)('Hello')
      ).to.be.a('string')

      expect(
        ruling.strictLength(6)('Hello')
      ).to.be.a('string')
    })
  })

  describe('#pattern', () => {
    const emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const emailPattern = ruling.pattern(emailRe)

    it('should be a valid email', function () {
      expect(
        emailPattern('my-email@gmail.com')
      ).to.equal(true)
    })

    it('should return an error message', function () {
      expect(
        emailPattern('my-email@gmail')
      ).to.be.a('string')

      expect(
        emailPattern('@gmail.com')
      ).to.be.a('string')

      expect(
        emailPattern('.@gmail.com')
      ).to.be.a('string')

      expect(
        emailPattern('my-email@@gmail.com')
      ).to.be.a('string')
    })
  })
})
