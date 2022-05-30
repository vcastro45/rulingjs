import { RulingConfiguration } from './configuration'
import en from './locale/en'

class RulingInstance {
  private config: RulingConfiguration

  constructor (config: RulingConfiguration = {
    lang: en
  }) {
    this.config = config
  }

  create (config?: RulingConfiguration) {
    return new RulingInstance(config)
  }

  t = (msgName: string, ...params: (string | number)[]) => {
    let str = this.config.lang[msgName]

    let i = 0
    for (const param of params) {
      str = str.replace(`%${i++}`, `${param}`)
    }
    return str
  }

  email = (err?: string) => {
    return (v: any) => (!v || (typeof v === 'string' && /^.+@\S+\.\S+$/.test(v))) || (err || this.t('email'))
  }

  isCapitalOrNumber = (err?: string) => {
    return (v: string) => (/^[A-Z\d]*$/.test(v)) || (err || this.t('isCapitalOrNumber'))
  }

  isCapital = (err?: string) => {
    return (v: string) => (/^[A-Z]*$/.test(v)) || (err || this.t('isCapital'))
  }

  isDefined = (err?: string) => {
    return (v: any) => (v !== undefined && v !== null) || (err || this.t('required'))
  }

  maxLength = (len: number, err?: string) => {
    return (v: any) => (!v || v.length <= len) ? true : (err || this.t('maxLength', len))
  }

  minLength = (len: number, err?: string) => {
    return (v: any) => (!v || v.length >= len) ? true : (err || this.t('minLength', len))
  }

  notContain = (forbiddenCharacters: [], err?: string) => {
    return (v: string) => {
      let error: string | boolean = true
      for (const character of forbiddenCharacters) {
        if (v.includes(character)) error = err || this.t('notContain', character)
      }
      return error
    }
  }

  notEmpty = (err?: string) => {
    return (v: any) => (v && v.length > 0) ? true : (err || this.t('notEmpty'))
  }

  required = (err?: string) => {
    return (v: any) => !!v || (err || this.t('required'))
  }

  strictLength = (len: number, err?: string) => {
    return (v: any) => (!v || v.length === len) ? true : (err || this.t('strictLength'))
  }

  pattern = (pattern: RegExp, err?: string) => {
    return (v: any) => (!v || pattern.test(v) ? true : (err || this.t('pattern')))
  }
}

export default new RulingInstance()
