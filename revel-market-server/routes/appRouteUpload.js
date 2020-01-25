const express = require('express')
const Config = require('../globals/Config');
const path = require('path');
const mkdirp = require('mkdirp')
const uuidv4 = require('uuid/v4');
const fs = require('fs');
const _config = new Config();

module.exports = function (app) {

    //#############################################################################################################
    //#############################################################################################################
    //################################################ Upload Route ###############################################
    //#############################################################################################################
    //#############################################################################################################
    // app.get('/public_file/:_code/:upload_url/:file', function (req, res) {
    //     var publicDir = require('path').join(__dirname, '../../public_file/' + req.params._code + '/' + req.params.upload_url + '/' + req.params.file);
    //     console.log("publicDir", publicDir);
    //     res.download(publicDir);
    // })

    app.post('/upload-image', function (req, res) {
        console.log(">>>>", req.body);
        var multer = require('multer');
        var filePathSub = '';
        var Storage = multer.diskStorage({
            destination: function (req, file, callback) {
                console.log(">>>>>>", req.params);
                const userPath =  req.body.upload_url;
                const subPath = '../public_images/' + userPath;
                const filePath = path.join(__dirname, subPath);
                filePathSub = userPath;

                mkdirp.sync(filePath)
                callback(null, filePath);
            },
            filename: function (req, file, callback) {
                console.log("file : ", req.body);
                callback(null, uuidv4() + req.body.file_type);
            }
        });

        var upload = multer({
            storage: Storage
        }).single("files");
        upload(req, res, function (err) {
            if (!req.file) {
                const require = {
                    data: { comment_photo_url: '' },
                    error: [{ message: 'Can not find photo upload.' }],
                    upload_result: false,
                    
                };
                res.send(require);
            } else {
                const comment_photo_url =  filePathSub + "/" + req.file.filename
                const require = {
                    comment_photo_url: comment_photo_url ,
                    error: [{ message: 'Upload photo complete.' }],
                    upload_result: true,
                    
                };
                console.log('res', require);
                res.send(require);
            }
        });
    });

    app.post('/delete-image', function (req, res) {
        console.log(req.body);

        const filePath = path.join(__dirname, "../public_images/" + req.body.delete_path);
        console.log(">", filePath);

        fs.unlink(filePath, (err) => {
            if (err) {
                const require = {
                    data: { comment_photo_url: '' },
                    error: [{ message: 'Can not find photo delete.' }],
                    upload_result: false,
                    
                };
                res.send(require);
            } else {
                const require = {
                    data: [],
                    error: [{ message: 'Delete photo complete.' }],
                    upload_result: true,
                    
                };
                console.log('res', require);
                res.send(require);
            }
            console.log('path/file.txt was deleted');
        });



    });





}