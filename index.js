module.exports = {
    "extends": [
        "tslint:recommended",
        "tslint-react",
        "tslint-config-prettier"
    ],
    "rules": {
        "variable-name": [
            "check-format",
            "allow-leading-underscore"
        ],
        "semicolon": [true, "always"],
        "await-promise": true,
        "curly": true,
        "forin": true,
        "no-console": true,
        "valid-typeof": true,
        "no-floating-promises": true,
        "no-misused-new": true,
        "no-string-throw": true,
        "no-unused-expression": [true],
        "prefer-object-spread": true,
        "indent": [true, "spaces", 4],
        "eofline": true,
    },
}
