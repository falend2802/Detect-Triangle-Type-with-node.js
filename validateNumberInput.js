const ValidationError = require("./ValidationError.js");

const validateNumberInput = (a, b, c) =>{
    if (typeof(a) != "number"){
        throw new ValidationError("First input must be a number");
    }
    if (typeof(b) != "number"){
        throw new ValidationError("Second input must be a number");
    }
    if (typeof(c) != "number"){
        throw new ValidationError("Third input must be a number");
    }
}

module.exports = validateNumberInput;
