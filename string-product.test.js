const product = require("./string-product");

describe('product tests', () => {
   test('first test', () => {
        expect(product("2", "1")).toBe("2");
    });
});