import express from 'express'
import '@controllers/orderController'
import mongoose from 'mongoose'
import Routes from './routes'
import cors from 'cors'

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })

const app = express()
app.use(express.json())
app.use(cors())
app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({ error: error.message })
})

app.use(Routes)

app.listen(process.env.PORT || 3000)
