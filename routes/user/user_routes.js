let User = require('../../models/user.model');
module.exports = function(app, db) {

    app.get('/users', (req, res) => {
        User.find()
            .then(users => res.json(users))
            .catch(err => res.status(400).json('Error: ' + err));
    });

    app.post('/users/add', (req, res) => {
        const username = req.body.username;
        const newUser = new User({username});
        newUser.save()
            .then(() => res.json('User added!'))
            .catch(err => res.status(400).json('Error: ' + err));
    });
    
    app.delete('/users/delete/:id', (req, res) => {
        User.findByIdAndDelete(req.params.id)
            .then(() => res.json('user deleted.'))
            .catch(err => res.status(400).json('Error: ' + err));
    });
}