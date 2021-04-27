import express from "express";
import * as controller from './controllers/yahoo-finance.controller.js'
import dotenv from 'dotenv'

dotenv.config()
const app = express();
const port = parseInt(process.env.PORT)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// defining routes
app.use('/news', controller.getNews)
app.use('/get-analysis', controller.getAnalysis)

// starting the server
app.listen(port, () => {
  console.log(`SERVER RUNNING AT ${port}`);
});