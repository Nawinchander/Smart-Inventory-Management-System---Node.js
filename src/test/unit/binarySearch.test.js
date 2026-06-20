const binarySearch =
require("../../src/utils/binarySearch");

describe("Binary Search", () => {

    test("should find product by price", () => {

        const products = [
            { price: 1000 },
            { price: 2000 },
            { price: 3000 },
            { price: 4000 }
        ];

        const result =
            binarySearch(products, 3000);

        expect(result).toEqual({
            price: 3000
        });

    });

});