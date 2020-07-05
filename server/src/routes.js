const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')
const { Router, json } = require('express')
const { text } = require('body-parser')

//banco de dados
const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database(
    "./db/arquivos.db",
    sqlite3.OPEN_READWRITE,
    err => {
        if(err){
            console.log(err.menssage)
            return
        }
        console.log('conectado com sucesso ao BD')
    }
)

routes.post("/dados",  multer(multerConfig).single("file"), async (req, res,next) =>{
    const query = /*sql*/`
        INSERT INTO Dados (Nome,URL,TipoArq,Categoria,Modo)
                  VALUES (?,?,?,?,? );`

   const tipo = req.file.mimetype.split("/")
   db.run(query,[req.file.originalname, req.file.path, tipo[1], req.body.categoria, "dowloand" ], err=>{
        if(err){
            return next(err)
        }
        return req.file;
    }) 
    return res.json("Arquivo inserido com sucesso")
});

routes.get("/dados", async(req, res, next) =>{
    const query  = /*sql*/`
     SELECT Id,Nome,URL,TipoArq,Categoria,Modo
     FROM Dados;
    `
    db.all(query, [], (err, dados) => {
        if (err) {
            throw err
        }
        return res.json(dados)
    })
})

// get por modo de arquivo
routes.get("/modo", async(req, res, next) =>{
    const query  = /*sql*/`
    SELECT Id,Nome,URL,TipoArq,Categoria
    FROM Dados WHERE Modo = ?; `

    db.all(query,req.body.modo, function (err, dados) {
        if (err) {
            throw err
        }
        return res.json(dados)
    })
})


// get por categoria de arquivo
routes.get("/cursoCategoria", async(req, res, next) =>{
    const query  = /*sql*/`
    SELECT Id,Nome,URL,TipoArq,Categoria, Modo
    FROM Dados WHERE Categoria = ?; `
 
    db.all(query,req.body.categoria, function (err, dados) {
        if (err) {
            throw err
        }
        return res.json(dados)
    })
})

//Atualizar nome e categoria 
routes.put("/dados/:id", (req, res,next) => {
    const query = /*sql*/`
       UPDATE Dados SET Nome = ?, Categoria = ?
      WHERE Id = ? `
  
  db.run(query,[req.body.nome, req.body.categoria,req.params.id], function (err){
      if(err){
         return next(err)
     }
     if(this.changes>0){
        return res.json('Atualizado com sucesso')
     }
     else{
         return res.sendStatus(404)
     }
    })  
})

routes.delete("/dados/:id", (req, res) =>{
    let url 
    const query  = /*sql*/`
      DELETE FROM Dados
      WHERE Id = ?;
    `
    const parametro = req.params.id

    db.each(`SELECT  URL FROM Dados
    WHERE id = ?`, parametro, (err, dados) => {
        if (err) {
            throw err
        }
        url = dados.URL
    })
    db.run(query,parametro,function(err) {
        if (err) {
            return console.log(err.menssage);
        }
        if(this.changes>0){
            let fs = require('fs');
              fs.unlink(url, function (err){
                  if (err) throw err;
                   console.log('Arquivo deletado!');
              })
           return res.json('Dado deletado com sucesso')
        }
        else{
            return res.sendStatus(404)
        }
       
    })
})

module.exports = routes