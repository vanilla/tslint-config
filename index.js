module.exports = {
    "extends": [
        require.resolve("tslint-react"),
        require.resolve("tslint-config-prettier"),
    ],
    "rules": {
        "align": false, // No forcing of alignment
        "array-type": [true, "array-simple"], // IThing[] instead of Array<IThing>
        "await-promise": true,
        "variable-name": [
            "check-format",
            "allow-leading-underscore"
        ],
        "arrow-return-shorthand": true,
        "ban-types": {
            options: [
                ["Object", "Avoid using the `Object` type. Did you mean `object`?"],
                ["Function", "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."],
                ["Boolean", "Avoid using the `Boolean` type. Did you mean `boolean`?"],
                ["Number", "Avoid using the `Number` type. Did you mean `number`?"],
                ["String", "Avoid using the `String` type. Did you mean `string`?"],
                ["Symbol", "Avoid using the `Symbol` type. Did you mean `symbol`?"],
            ],
        },
        "class-name": true, // PascalCased class names
        "curly": true, // Require braces on if/for/do/while statements
        "eofline": true,
        "forin": true,
        "import-spacing": true,
        "indent": [true, "spaces", 4],
        "interface-name": {
            options: ["always-prefix"], // IThing isntead of Thing
        },
        "interface-over-type-literal": true,
        "max-classes-per-file": {
            options: [1],
        },
        "member-access": true,
        "member-ordering": {
            options: {
                order: "statics-first",
            },
        },
        "new-parens": true,
        "no-angle-bracket-type-assertion": true,
        "no-any": false,
        "no-arg": true,
        "no-conditional-assignment": true,
        "no-console": true,
        "no-construct": true,
        "no-duplicate-super": true,
        "no-empty": true,
        "no-eval": true,
        "no-internal-module": true,
        "no-invalid-this": false,
        "no-floating-promises": true,
        "no-misused-new": true,
        "no-namespace": true,
        "no-shadowed-variable": true,
        "no-string-literal": true,
        "no-string-throw": true,
        "no-switch-case-fall-through": false,
        "no-trailing-whitespace": true,
        "no-unnecessary-initializer": true,
        "no-unsafe-finally": true,
        "no-unused-expression": [true, "allow-fast-null-checks"],
        // disable this rule as it is very heavy performance-wise and not that useful
        "no-use-before-declare": false,
        "no-var-keyword": true,
        "no-var-requires": true,
        "object-literal-key-quotes": [true, "as-needed"],
        "object-literal-shorthand": true,
        "object-literal-sort-keys": false,
        "one-line": {
            options: [
                "check-catch",
                "check-else",
                "check-finally",
                "check-open-brace",
                "check-whitespace",
            ],
        },
        "one-variable-per-declaration": {
            options: ["ignore-for-loop"],
        },
        "only-arrow-functions": {
            options: [
                "allow-declarations",
                "allow-named-functions",
            ],
        },
        "prefer-const": true,
        "prefer-object-spread": true,
        "prefer-for-of": true,
        "radix": true,
        "semicolon": [true, "always", "ignore-bound-class-methods"],
        "trailing-comma": {
            options: {
                multiline: "always",
                singleline: "never",
            },
        },
        "triple-equals": {
            options: ["allow-null-check"],
        },
            "typedef": false,
        "unified-signatures": true,
        "use-isnan": true,
        "variable-name": {
            options: [
                "ban-keywords",
                "check-format",
                "allow-pascal-case",
                "allow-leading-underscore",
            ],
        },

        // React rules

        "jsx-alignment": true,
        "jsx-no-bind": true,
        "jsx-self-close": true,
        "jsx-no-lambda": true,
        "jsx-no-string-ref": true,
        "jsx-use-translation-function": true,
        "jsx-key": false,
        "jsx-boolean-value": false
    },
};
