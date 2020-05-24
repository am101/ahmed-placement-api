const compiler = require('../config/compiler');
module.exports = function(app, db) {
    app.post('/editor', (req, res) => {
        console.log(req.body.code) //put your code inside code//
    });
    app.post('/editor/:language', (req, res) => {
        language = req.params.language;
        let code = req.body.code;
        compiler(language, code);
    });
}