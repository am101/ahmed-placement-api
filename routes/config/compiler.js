const fs = require('fs');
module.exports = function(language, code) {
    this.language = language;
    this.code = code;
    let user = "usernamehere"
    for(let i=0;i<extensions.length();i++){
        // if this.language == extensions[i];
    }
    fs.writeFile('filename.txt', code, (err, file) => {
        if(err) throw err;
        console.log('saved');
    });
    console.log(language);
}
var extensions = {
    java: 'java',
    javascript: 'js',
    html: 'html',
    css: 'css',
    rust: 'rs'
}