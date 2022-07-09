const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const bollywoodrouter = require("./routes/bollywood.routes");
const sportsrouter = require("./routes/sports.routes");
const hollywoodrouter = require("./routes/hollywood.routes");
const fitnessrouter = require("./routes/fitness.routes");
const technologyrouter = require("./routes/technology.routes");
const homerouter = require("./routes/home.routes");
const cors = require("cors");

app.use(cors());

app.use("/", homerouter);
app.use("/", bollywoodrouter);
app.use("/", hollywoodrouter);
app.use("/", technologyrouter);
app.use("/", sportsrouter);
app.use("/", fitnessrouter);

app.listen(port, function () {
  console.log(`Server Running at port ,${port}`);
});