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

function definirTipo(minetype){
    if(minetype == 'image/jpeg' || 'image/pjpeg'
    || 'image/png' || 'image/gif') return 2;
    else if(minetype == 'file/pdf') return 1;
    else return 4 
}

routes.post("/dados",  multer(multerConfig).single("file"), async (req, res,next) =>{
    const query = /*sql*/`
        INSERT INTO Dados(nome,url,tipo,modo)
        VALUES (?,?,?,?)`
    
    const tipo = definirTipo(req.file.mimetype);
        
    db.run(query,[req.file.originalname, req.file.path,tipo,'1'], err=>{
        if(err){
            return next(err)
        }
        return req.file;
    })  
    return res.json("Upload realizado com sucesso")
});

routes.get("/dados", async(req, res, next) =>{
    const query  = /*sql*/`
     SELECT id, nome, url
     FROM dados; `
    db.all(query, [], (err, dados) => {
        if (err) {
            throw err
        }
        return res.json(dados)
    })
})

routes.get("/dados", async(req, res, next) =>{
    const query  = /*sql*/`
     SELECT id, nome, url
     FROM dados; `
    db.all(query, [], (err, dados) => {
        if (err) {
            throw err
        }
        return res.json(dados)
    })
})

routes.put("/dados/:id", (req, res,next) => {
    const query = /*sql*/`
       UPDATE Dados
       SET nome = ?
       WHERE id = ?`
  
  db.run(query,[req.body.nome,req.params.id], function (err){
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
      WHERE id = ?;
    `
    const parametro = req.params.id

    db.each(`SELECT  url FROM Dados
    WHERE id = ?`, parametro, (err, dados) => {
        if (err) {
            throw err
        }
        url = dados.url
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