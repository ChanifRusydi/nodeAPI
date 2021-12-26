const express = require('express');
const app = express();
const mysql = require('mysql');
const port = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sosial_media'
});

app.post('/posts', (req, res) => {
    let sql = 'INSERT INTO posts SET post_date=NOW()'
    +",username=' "+req.body.username
    +"', post="+req.body.post_text+"'";
    // let values = [req.body.user_id, req.body.post_text];
    db.query(sql, (err, result) => {
        if (err) throw err; 
        res.json({ "status": 200, "message": "Post created", "data": null });
    });
});
app.get('/api/posts', (req, res) => {
    let sql = 'SELECT post_id, username, post, DATE_FORMAT(post_date, "%d-%m-%Y") AS post_date FROM posts';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json({status: 'success', data: result, message: 'Posts fetched'});
    });
});

app.get('/api/posts/:id', (req, res) => {
    let sql = 'SELECT * FROM posts WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json({status: 'success', data: result, message: 'Posts fetched'});
    });
});
    
app.put('/api/posts/:id', (req, res) => {
    let sql = 'UPDATE posts SET post_text = ? WHERE id = ?';
    db.query(sql, [req.body.post_text, req.params.id], (err, result) => {
        if (err) throw err;
        res.json({status: 'success', message: 'Post updated'});
    });
});


app.delete('posts/id:id', (req, res) => {
    let sql ="DELETE FROM posts WHERE post_id = '"+req.params.id+"'";
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json({status: 'success', message: 'Post deleted'});
    });
});
app.use('/images',express.static('images'));
app.listen(port, () => console.log(`Listening on port ${port}`));