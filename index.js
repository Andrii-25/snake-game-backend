const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./router/index");
const errorMiddleware = require("./middlewares/error-middleware");
require("dotenv/config");

const app = express();

app.use(express.json());
app.use(cookieParser());
// app.use(
//   cors({
//     credentials: true,
//     origin: process.env.CLIENT_URL,
//   })
// );

app.use(cors());
app.use("/api", router);
app.use(errorMiddleware);

app.listen(process.env.PORT || 8000, () => {
  console.log("App is running...");
});
