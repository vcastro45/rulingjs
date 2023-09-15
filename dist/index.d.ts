import { RulingConfiguration } from './configuration';
declare class RulingInstance {
    private config;
    constructor(config?: RulingConfiguration);
    create(config?: RulingConfiguration): RulingInstance;
    t: (msgName: string, ...params: (string | number)[]) => string;
    email: (err?: string) => (v: any) => string | true;
    isNumber: (err?: string) => (v: string) => string | true;
    isInteger: (err?: string) => (v: string) => string | true;
    isCapitalOrNumber: (err?: string) => (v: string) => string | true;
    isCapital: (err?: string) => (v: string) => string | true;
    isDefined: (err?: string) => (v: any) => string | true;
    maxLength: (len: number, err?: string) => (v: any) => string | true;
    minLength: (len: number, err?: string) => (v: any) => string | true;
    notContain: (forbiddenCharacters: [], err?: string) => (v: string) => string | true;
    notEmpty: (err?: string) => (v: any) => string | true;
    required: (err?: string) => (v: any) => string | true;
    strictLength: (len: number, err?: string) => (v: any) => string | true;
    pattern: (pattern: RegExp, err?: string) => (v: any) => string | true;
}
declare const _default: RulingInstance;
export default _default;
