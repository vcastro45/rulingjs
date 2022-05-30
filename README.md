# RulingJs

Just a simple set of useful functions to check validation rules

[![npm](https://img.shields.io/npm/v/rulingjs.svg)](https://www.npmjs.com/package/rulingjs)

## Install

```bash
npm i -S rulingjs
```

## To Do List

- ~~Translate in multiple languages~~
- Automate NPM publication with CI/CD pipeline
- ~~Add tests~~

## Usage 
Instanciating a rule
```typescript
// Basic rule
const requiredRule = ruling.required()

// Rule with custom error message
const requiredRule = ruling.required('This is a mandatory field, dude !')
```

Change language
```typescript
import ruling from 'ruling'
import fr from 'ruling/locale/fr.js'

const rulingFr = ruling.create({
      lang: fr
    })

const requiredRule = rulingFr.required()
```

Use a rule with Vuetify
```vue
<template>
  <v-text-field label="Your email"
                :rules="[ruling.required(), ruling.email()]"
  />
</template>
```

## Rules

### `email`
```
ruling.email(customErrorMessage?: string)
```

### `isCapital`
```
ruling.isCapital(customErrorMessage?: string)
```

### `isCapitalOrNumber`
```
ruling.isCapitalOrNumber(customErrorMessage?: string)
```

### `isDefined`
```
ruling.isDefined(customErrorMessage?: string)
```

### `maxLength`
```
ruling.maxLength(len: number, customErrorMessage?: string)
```

### `minLength`
```
ruling.minLength(len: number, customErrorMessage?: string)
```

### `NotContain`
```
ruling.NotContain(forbiddenCharacters: string[], customErrorMessage?: string)
```

### `notEmpty`
```
ruling.notEmpty(customErrorMessage?: string)
```

### `required`
```
ruling.required(customErrorMessage?: string)
```

### `strictLength`
```
ruling.strictLength(len: number, customErrorMessage?: string)
```

### `pattern`
```
ruling.pattern(pattern: RegExp, customErrorMessage?: string)
```

## Thanks

Thanks to [@Vincere1st](https://github.com/Vincere1st) for contributions

## License

[MIT](http://opensource.org/licenses/MIT)
