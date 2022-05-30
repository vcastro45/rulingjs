import { RulingConfiguration } from './configuration';
declare class RulingInstance {
    private config;
    constructor(config?: RulingConfiguration);
    create(config?: RulingConfiguration): RulingInstance;
    t: (msgName: string, ...params: (string | number)[]) => string;
    email: (err?: string | undefined) => (v: any) => string | true;
    isCapitalOrNumber: (err?: string | undefined) => (v: string) => string | true;
    isCapital: (err?: string | undefined) => (v: string) => string | true;
    isDefined: (err?: string | undefined) => (v: any) => string | true;
    maxLength: (len: number, err?: string | undefined) => (v: any) => string | true;
    minLength: (len: number, err?: string | undefined) => (v: any) => string | true;
    notContain: (forbiddenCharacters: [], err?: string | undefined) => (v: string) => string | true;
    notEmpty: (err?: string | undefined) => (v: any) => string | true;
    required: (err?: string | undefined) => (v: any) => string | true;
    strictLength: (len: number, err?: string | undefined) => (v: any) => string | true;
    pattern: (pattern: RegExp, err?: string | undefined) => (v: any) => string | true;
}
declare const _default: RulingInstance;
export default _default;
