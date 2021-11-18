import { RulingConfiguration } from './configuration'

class RulingInstance {
  private translations: { [msgName: string]: string }

  constructor (private config: RulingConfiguration = {
    lang: 'en'
  }) {
    this.translations = require(`./locale/${config.lang}.json`)
  }

  create (config?: RulingConfiguration) {
    return new RulingInstance(config)
  }

  private t (msgName: string, ...params: (string | number)[]) {
    const str = this.translations[msgName]

    let i = 0
    for (const param of params) {
      str.replaceAll(`%${i++}`, `${param}`)
    }
    return str
  }

  email (v: any) {
    return (!v || (typeof v === 'string' && /^.+@\S+\.\S+$/.test(v))) || this.t('email')
  }

  isCapitalOrNumber (v: string) {
    return (/^[A-Z\d]*$/.test(v)) || this.t('isCapitalOrNumber')
  }

  isCapital (v: string) {
    return (/^[A-Z]*$/.test(v)) || this.t('isCapital')
  }

  isDefined (v: any) {
    return (v !== undefined && v !== null) || this.t('required')
  }

  maxLength (len: number, err?: string) {
    return (v: any) => (!v || v.length <= len) ? true : (err || this.t('maxLength', len))
  }

  minLength (len: number, err?: string) {
    return (v: any) => (!v || v.length >= len) ? true : (err || this.t('minLength', len))
  }

  notContain (forbiddenCharacter: []) {
    return (v: string) => {
      let error: string | boolean = true
      for (const character of forbiddenCharacter) {
        if (v.includes(character)) error = this.t('notContain', character)
      }
      return error
    }
  }

  notEmpty (v: any) {
    return (v && v.length > 0) ? true : this.t('notEmpty')
  }

  required (v: any) {
    return !!v || this.t('required')
  }

  strictLength (len: number, err?: string) {
    return (v: any) => (!v || v.length === len) ? true : (err || this.t('strictLength'))
  }

}

export default new RulingInstance()
