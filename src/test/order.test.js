const request = require("supertest");
const app = require("../src/app");

describe("Order APIs", () => {

    test("should create an order", async () => {

        const response = await request(app)
            .post("/api/orders")
            .send({
                productId: "6854b1d34c1fd91d12345678",
                quantity: 2
            });

        expect(response.statusCode).toBe(201);

        expect(response.body).toHaveProperty("_id");

    });

});