# Dessert jsonschema

Clone of [jsonschema](https://github.com/tdegrunt/jsonschema) implemented in Rust for WebAssembly

## Summary
* [Installation](#installation)
* [Quick Example](#quickexample)

## Installation
```sh
npm install dessert-jsonschema
```

## Quick Example

### Node

```javascript
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