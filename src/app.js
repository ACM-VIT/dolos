/** loading dependencies */
const express = require("express");
const dotenv = require("dotenv");

/** loading modules */
const apiRoutes = require("./routes/api.routes");

/** load configs from .env file */
dotenv.config();

/** requiring database script */
require("./database");

/** initialize express server */
const app = express();
const port = process.env.PORT || 3000;

/** map modules to routes */
app.get("/", (req, res) => {
  res.json({ message: "OK" });
});

app.use("/api/v1", apiRoutes);

/** listen for requests on port 3000 */
app.listen(port, () =>
  console.log(`Started Server on http://localhost:${port}`)
);
