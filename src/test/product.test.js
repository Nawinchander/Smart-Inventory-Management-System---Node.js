const request = require("supertest");
const app = require("../app");

describe("Product APIs",()=>{

test("should create product",async()=>{

const response = await request(app)
.post("/api/products")
.send({
name:"Laptop",
price:80000,
quantity:5
});

expect(response.statusCode)
.toBe(201);

});
});