const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const { errors } = require("celebrate");
const userRouter = require("./router/user.router.js");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(helmet());
app.use(bodyParser.json());
const port = process.env.port || 3001;
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/kontrakt", {
  useNewUrlParser: true,
  useUnifiedTopology: false,
});
app.use("/users", userRouter);
app.listen(port, () => {
  console.log(`Server good! http://localhost:${port}`);
});
