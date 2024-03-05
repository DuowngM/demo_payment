const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const bodyParser = require("body-parser");
const { paymentRouter } = require("./src/routes/payment.routes");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
paymentRouter(app);
app.listen(process.env.PORT || 8800, () => {
  console.log("chay vl");
});
