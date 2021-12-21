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
        const str = this.config.lang[msgName];
        let i = 0;
        for (const param of params) {
            str.replace(`%${i++}`, `${param}`);
        }
        return str;
    };
    email = (v) => {
        return (!v || (typeof v === 'string' && /^.+@\S+\.\S+$/.test(v))) || this.t('email');
    };
    isCapitalOrNumber = (v) => {
        return (/^[A-Z\d]*$/.test(v)) || this.t('isCapitalOrNumber');
    };
    isCapital = (v) => {
        return (/^[A-Z]*$/.test(v)) || this.t('isCapital');
    };
    isDefined = (v) => {
        return (v !== undefined && v !== null) || this.t('required');
    };
    maxLength = (len, err) => {
        return (v) => (!v || v.length <= len) ? true : (err || this.t('maxLength', len));
    };
    minLength = (len, err) => {
        return (v) => (!v || v.length >= len) ? true : (err || this.t('minLength', len));
    };
    notContain = (forbiddenCharacter) => {
        return (v) => {
            let error = true;
            for (const character of forbiddenCharacter) {
                if (v.includes(character))
                    error = this.t('notContain', character);
            }
            return error;
        };
    };
    notEmpty = (v) => {
        return (v && v.length > 0) ? true : this.t('notEmpty');
    };
    required = (v) => {
        return !!v || this.t('required');
    };
    strictLength = (len, err) => {
        return (v) => (!v || v.length === len) ? true : (err || this.t('strictLength'));
    };
    pattern = (pattern, err) => {
        return (v) => (!v || pattern.test(v) ? true : (err || this.t('pattern')));
    };
}
exports.default = new RulingInstance();
