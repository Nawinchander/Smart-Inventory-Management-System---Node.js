const request = require("supertest");

const app =
require("../../src/app");

describe("Inventory E2E Flow",()=>{

    let token;

    beforeAll(async()=>{

        const response =
            await request(app)
                .post("/api/auth/login")
                .send({
                    email:"admin@gmail.com",
                    password:"password123"
                });

        token = response.body.token;

    });

    test("Complete Inventory Flow",async()=>{

        // create product

        const productResponse =
            await request(app)
                .post("/api/products")
                .set(
                    "Authorization",
                    token
                )
                .send({
                    name:"MacBook",
                    price:120000,
                    quantity:2
                });

        expect(productResponse.statusCode)
            .toBe(201);

        // fetch products

        const products =
            await request(app)
                .get("/api/products")
                .set(
                    "Authorization",
                    token
                );

        expect(products.statusCode)
            .toBe(200);

    });

});


/// package.json
{
  "scripts": {
    "test": "jest"
  }
}

/// jest.config.js
module.exports = {

    testEnvironment: "node",

    testMatch: [
        "**/tests/**/*.test.js"
    ]

};