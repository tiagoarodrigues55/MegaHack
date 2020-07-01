const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')


routes.get("/posts", async(req, res) =>{
//Procurar os posts na pasta tmp/uploads
    // return res.json(post)
})

routes.post("/posts", multer(multerConfig).single("file"), async (req, res) => {
   console.log(req.file)
})

module.exports = routes