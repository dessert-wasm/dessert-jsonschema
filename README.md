[![](https://user-images.githubusercontent.com/25987204/78205790-10b0c680-74d8-11ea-9767-5bb93e920044.png)](https://dessert.dev/)

# Dessert jsonschema
============

[![npm-badge]][npm-url]
[![license-badge]][license]

[npm-badge]: https://img.shields.io/npm/v/dessert-jsonschema.svg
[npm-url]: https://www.npmjs.org/package/dessert-jsonschema
[license-badge]: https://img.shields.io/github/license/dessert-wasm/dessert-jsonschema
[license]: LICENSE_MIT

> [jsonschema](https://github.com/tdegrunt/jsonschema), but implemented in Rust and WebAssembly

## Table of contents
* [Usage](#usage)
* [Installation](#installation)
* [License](#license)
* [Contributing](#contributing)

## Usage

```js
var Validator = require('dessert-jsonschema').Validator;
var v = new Validator();
var instance = 4;
var schema = {"type": "number"};
console.log(v.validate(instance, schema));
```

### Even simpler

```javascript
var validate = require('dessert-jsonschema').validate;
console.log(validate(4, {"type": "number"}));
```

## Installation
With [npm](https://npmjs.org/):
```shell
npm install dessert-jsonschema
```

## License
This software is licensed under the MIT license (see [LICENSE](LICENSE_MIT)).

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md)