const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
const routes = require("./route/routes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");

connectDB();

app.get("/", (req, res) => res.send("Api running"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);
app.use(notFound);
app.use(errorHandler);
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  }),
);
app.use("/uploads", express.static("uploads"));
app.listen(port, () => console.log(`Server started on port ${port}`));
