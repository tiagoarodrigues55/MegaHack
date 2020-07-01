const path = require('path')
const crypto = require('crypto')
const multerS3 = require('multer-s3')
const aws = require("aws-sdk")

const storageTypes = {
    s3: multerS3({
        s3: new aws.S3(),
        bucket: 'uploadapipost',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: "public-read",
        key: (req, file, cb) =>{
            crypto.randomBytes(5, (err, hash) => {
                if(err) cb(err)
            
                const fileName = `${hash.toString('hex')}-${file.originalname}`
                cb(null, fileName)
            })
        }
    })
    
}

module.exports = {
dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
storage: multerS3({
    s3: new aws.S3(),
    bucket: 'uploadapipost',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read",
    key: (req, file, cb) =>{
        crypto.randomBytes(5, (err, hash) => {
            if(err) cb(err)
        
            const fileName = `${hash.toString('hex')}-${file.originalname}`
            cb(null, fileName)
        })
    }
}),

}