const request = require("supertest");

const app =
require("../../src/app");

describe("Product Integration",()=>{

    test("should create and fetch product",async()=>{

        await request(app)
            .post("/api/products")
            .send({
                name:"Laptop",
                price:70000,
                quantity:5
            });

        const response =
            await request(app)
                .get("/api/products");

        expect(response.statusCode)
            .toBe(200);

        expect(response.body.length)
            .toBeGreaterThan(0);

    });

});