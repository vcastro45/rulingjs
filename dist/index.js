class RulingInstance {
    config;
    translations;
    constructor(config = {
        lang: 'en'
    }) {
        this.config = config;
        this.translations = require(`./locale/${config.lang}.json`);
    }
    create(config) {
        return new RulingInstance(config);
    }
    t(msgName, ...params) {
        const str = this.translations[msgName];
        let i = 0;
        for (const param of params) {
            str.replaceAll(`%${i++}`, `${param}`);
        }
        return str;
    }
    email(v) {
        return (!v || (typeof v === 'string' && /^.+@\S+\.\S+$/.test(v))) || this.t('email');
    }
    isCapitalOrNumber(v) {
        return (/^[A-Z\d]*$/.test(v)) || this.t('isCapitalOrNumber');
    }
    isCapital(v) {
        return (/^[A-Z]*$/.test(v)) || this.t('isCapital');
    }
    isDefined(v) {
        return (v !== undefined && v !== null) || this.t('required');
    }
    maxLength(len, err) {
        return (v) => (!v || v.length <= len) ? true : (err || this.t('maxLength', len));
    }
    minLength(len, err) {
        return (v) => (!v || v.length >= len) ? true : (err || this.t('minLength', len));
    }
    notContain(forbiddenCharacter) {
        return (v) => {
            let error = true;
            for (const character of forbiddenCharacter) {
                if (v.includes(character))
                    error = this.t('notContain', character);
            }
            return error;
        };
    }
    notEmpty(v) {
        return (v && v.length > 0) ? true : this.t('notEmpty');
    }
    required(v) {
        return !!v || this.t('required');
    }
    strictLength(len, err) {
        return (v) => (!v || v.length === len) ? true : (err || this.t('strictLength'));
    }
}
export default new RulingInstance();
