require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const api = require('./api')

const app = express()
const file = path.resolve(__dirname, '..', 'tmp', 'uploads', '74c639bfd8-antonio_i.png')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(morgan("dev"))


app.use(require("./routes"))

app.listen(process.env.PORT || 3001)
api.post('deploy', file).then(console.log('Tudo ok!'))
