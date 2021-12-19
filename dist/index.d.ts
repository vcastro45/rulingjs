import { RulingConfiguration } from './configuration';
declare class RulingInstance {
    private config;
    constructor(config?: RulingConfiguration);
    create(config?: RulingConfiguration): RulingInstance;
    t: (msgName: string, ...params: (string | number)[]) => string;
    email: (v: any) => string | true;
    isCapitalOrNumber: (v: string) => string | true;
    isCapital: (v: string) => string | true;
    isDefined: (v: any) => string | true;
    maxLength: (len: number, err?: string | undefined) => (v: any) => string | true;
    minLength: (len: number, err?: string | undefined) => (v: any) => string | true;
    notContain: (forbiddenCharacter: []) => (v: string) => string | true;
    notEmpty: (v: any) => string | true;
    required: (v: any) => string | true;
    strictLength: (len: number, err?: string | undefined) => (v: any) => string | true;
}
declare const _default: RulingInstance;
export default _default;
