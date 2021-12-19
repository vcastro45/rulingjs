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
    const str = this.config.lang[msgName]

    let i = 0
    for (const param of params) {
      str.replace(`%${i++}`, `${param}`)
    }
    return str
  }

  email = (v: any) => {
    return (!v || (typeof v === 'string' && /^.+@\S+\.\S+$/.test(v))) || this.t('email')
  }

  isCapitalOrNumber = (v: string) => {
    return (/^[A-Z\d]*$/.test(v)) || this.t('isCapitalOrNumber')
  }

  isCapital = (v: string) => {
    return (/^[A-Z]*$/.test(v)) || this.t('isCapital')
  }

  isDefined = (v: any) => {
    return (v !== undefined && v !== null) || this.t('required')
  }

  maxLength = (len: number, err?: string) => {
    return (v: any) => (!v || v.length <= len) ? true : (err || this.t('maxLength', len))
  }

  minLength = (len: number, err?: string) => {
    return (v: any) => (!v || v.length >= len) ? true : (err || this.t('minLength', len))
  }

  notContain = (forbiddenCharacter: []) => {
    return (v: string) => {
      let error: string | boolean = true
      for (const character of forbiddenCharacter) {
        if (v.includes(character)) error = this.t('notContain', character)
      }
      return error
    }
  }

  notEmpty = (v: any) => {
    return (v && v.length > 0) ? true : this.t('notEmpty')
  }

  required = (v: any) => {
    return !!v || this.t('required')
  }

  strictLength = (len: number, err?: string) => {
    return (v: any) => (!v || v.length === len) ? true : (err || this.t('strictLength'))
  }
}

export default new RulingInstance()
