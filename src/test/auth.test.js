// Authentication Test

// File
// tests/auth.test.js

// What does it test?
// Login API
// Status code
// JWT token generation


const request = require("supertest");
const app = require("../src/app");

describe("Auth APIs", () => {

    test("should login successfully", async () => {

        const response = await request(app)
            .post("/api/auth/login")
            .send({
                email: "admin@gmail.com",
                password: "password123"
            });

        expect(response.statusCode).toBe(200);

        expect(response.body).toHaveProperty("token");

    });

});



