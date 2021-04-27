import express from "express";
import dotenv from 'dotenv'

dotenv.config()
const app = express();
const port = parseInt(process.env.PORT)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// starting the server
app.listen(port, () => {
  console.log(`SERVER RUNNING AT ${port}`);
});