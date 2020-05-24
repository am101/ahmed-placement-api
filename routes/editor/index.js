const editorRoutes = require('./editor_routes');

module.exports = function(app, db) {
    editorRoutes(app, db);
}