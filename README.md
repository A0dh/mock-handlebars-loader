# mock-handlebars-loader
Mock handlebars loader for testing

## Installation
`npm i -D mock-handlebars-loader` or `npm install --save-dev mock-handlebars-loader`

## How to use
If you use extension `.handlebars`, then simply add

`require('mock-handlebars-loader')`

to your test setup script, as the `.handlebars` extensions is being registered by default

However, if you are using other types of extensions, you can register them as follows:

```
const mockHandlebarsLoader = require('mock-handlebars-loader')

mockHandlebarsLoader.register(['.hbs', '.html'])
```
#### Example usage with mocha
`mocha --require mock-handlebars-loader test/**/*.spec.js`
