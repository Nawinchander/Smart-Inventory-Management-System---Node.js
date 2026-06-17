const express = require("express");

const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");

const app = express();

app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/products",productRoutes);
const client = require("./config/prometheus");

app.get("/metrics", async (req, res) => {

    res.set(
        "Content-Type",
        client.register.contentType
    );

    res.end(
        await client.register.metrics()
    );
});

module.exports = app;