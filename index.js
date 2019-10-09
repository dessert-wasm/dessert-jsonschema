let wasm = require('dessert-jsonschema-core');

class Validator {
    validate(instance, schema) {
        return wasm.validate(instance, schema);
    }
}

module.exports.Validator	= Validator;
module.exports.validate		= wasm.validate;
