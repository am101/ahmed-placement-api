let Chat = require('../../models/chat.model');
module.exports = function(app, db) {
    app.get('/general/chatroom', (req, res) => {
        Chat.find()
            .then(chat => res.json(chat))
            .catch(err => res.status(400).json('Error: ' + err));
    });

    app.post('/general/chatroom', (req, res) => {
        const username = req.body.username;
        const message = req.body.message;
        const newMessage = new Chat({username, message});
        newMessage.save()
            .then(() => res.json('message added!'))
            .catch(err => res.status(400).json('Error: ' + err));
    });
    
    app.delete('/general/chatroom', (req, res) => {
        Chat.findByIdAndDelete(req.params.id)
            .then(() => res.json('message deleted.'))
            .catch(err => res.status(400).json('Error: ' + err));
    });
}