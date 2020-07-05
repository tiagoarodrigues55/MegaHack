const multer = require('multer')
const path = require('path')
const crypto = require('crypto')
const multerS3 = require('multer-s3')
const aws = require("aws-sdk")

const storageTypes = {
    
    local: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
        },
        filename: (req, file, cb) => {
           
            crypto.randomBytes(5, (err, hash) => {
                if(err) cb(err)
            
                file.key = `${hash.toString('hex')}-${file.originalname}`
                cb(null, file.key)
            })
        }
    })
    
}

module.exports = {
dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
storage: storageTypes[process.env.STORAGE_TYPE],

}