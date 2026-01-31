import app from "./index.js";
import mongoose from "mongoose";
import getPort, { portNumbers } from "get-port";

mongoose
  .connect("mongodb://127.0.0.1:27017/knv")
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("Failed to connect to the database"));

const port = await getPort({ port: portNumbers(5000, 5100) });
console.log("Available port: ", port);
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
