const express = require('express')
const cors = require('cors')
const tableRouter = require('./routers/tableRouter')
require('dotenv').config();

const app = express()

app.use(express.json());
app.use(cors())
app.use('/table',tableRouter);

const start = async () => {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`listening on port ${process.env.PORT}`)
    })
  } catch (e) {
    console.log(e);
  }
}

start()