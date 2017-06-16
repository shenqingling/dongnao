var multer = require('multer');
// 上传文件存放目录
var upload = multer({ dest: 'upload' });

module.exports = function(app) {
    app.get('/upload', function(req, res) {
        res.render('upload');
    });

    app.post('/upload', upload.array('file', 2), function(req, res, next) {
        // console.log(req);
        // console.log(req.body);
        // console.log(req.file);
        console.log(req.files);
        var Picture = global.dbHelper.getModel('Picture');
        try {
            for (var i = 0; i < req.files.length; i++) {
                Picture.create({
                    name: req.files[i].originalname,
                    description: req.body.desc,
                    url: req.files[i].filename
                });
            }
            res.sendStatus(200);
        } catch (e) {
            res.sendStatus(404);
        }
    });
}
