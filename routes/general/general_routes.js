module.exports = function(app, db) {
    app.post('/general/chatroom', (req, res) => {
        const test = {
            text: req.body.text
        };
        db.collection('test').insertOne(test, (err, result) => {
            if(err) return console.log(err);
            console.log(result.ops[0]);
            res.send('result added');
        });
    });

    app.get('/general/chatroom', (req, res) => {
        db.collection('test').find({}, (err, data) => {
            if(err) return console.log(err);
            console.log(data);

        });
    });
    
    app.delete('/general/chatroom', (req, res) => {
        db.collection('test').deleteOne({text:'apple'}, (err, result) => {
            if(err) return console/log(err);
            res.send('deleted the object');
        });
    });
}