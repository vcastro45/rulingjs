"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const en_1 = __importDefault(require("./locale/en"));
class RulingInstance {
    config;
    constructor(config = {
        lang: en_1.default
    }) {
        this.config = config;
    }
    create(config) {
        return new RulingInstance(config);
    }
    t = (msgName, ...params) => {
        let str = this.config.lang[msgName];
        let i = 0;
        for (const param of params) {
            str = str.replace(`%${i++}`, `${param}`);
        }
        return str;
    };
    email = (err) => {
        return (v) => (!v || (typeof v === 'string' && /^.+@\S+\.\S+$/.test(v))) || (err || this.t('email'));
    };
    isCapitalOrNumber = (err) => {
        return (v) => (/^[A-Z\d]*$/.test(v)) || (err || this.t('isCapitalOrNumber'));
    };
    isCapital = (err) => {
        return (v) => (/^[A-Z]*$/.test(v)) || (err || this.t('isCapital'));
    };
    isDefined = (err) => {
        return (v) => (v !== undefined && v !== null) || (err || this.t('required'));
    };
    maxLength = (len, err) => {
        return (v) => (!v || v.length <= len) ? true : (err || this.t('maxLength', len));
    };
    minLength = (len, err) => {
        return (v) => (!v || v.length >= len) ? true : (err || this.t('minLength', len));
    };
    notContain = (forbiddenCharacters, err) => {
        return (v) => {
            let error = true;
            for (const character of forbiddenCharacters) {
                if (v.includes(character))
                    error = err || this.t('notContain', character);
            }
            return error;
        };
    };
    notEmpty = (err) => {
        return (v) => (v && v.length > 0) ? true : (err || this.t('notEmpty'));
    };
    required = (err) => {
        return (v) => !!v || (err || this.t('required'));
    };
    strictLength = (len, err) => {
        return (v) => (!v || v.length === len) ? true : (err || this.t('strictLength'));
    };
    pattern = (pattern, err) => {
        return (v) => (!v || pattern.test(v) ? true : (err || this.t('pattern')));
    };
}
exports.default = new RulingInstance();
