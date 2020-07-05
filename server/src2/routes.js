const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')

routes.post("/deploy", multer(multerConfig).array("file", 10), async (req, res) => {
   console.log(req.file)
   console.log(req)
   return
})

module.exports = routes