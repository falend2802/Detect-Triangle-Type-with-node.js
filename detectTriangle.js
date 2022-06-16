const validateNumberInput = require("./validateNumberInput.js");

const detectTriangle = (a, b, c) => {
    try {
        validateNumberInput(a, b, c);
        if (a === b && b === c) {
            return 'Equilateral Triangle';
        }

        if (a === b || a === c || b === c) {
            return 'Isosceles Triangle';
        }

        return 'Scalene Triangle';
    } catch (error) {
        return error.message;
    }
}

module.exports = detectTriangle;
