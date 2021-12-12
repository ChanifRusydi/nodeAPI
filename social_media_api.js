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
    database: 'social_media_db'
});

app.post('/api/post', (req, res) => {
    let sql = 'INSERT INTO posts (user_id, post_text) VALUES (?, ?)';

app.get('/api/posts', (req, res) => {
    let sql = 'SELECT * FROM posts';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json({status: 'success', data: result, message: 'Posts fetched'});
    });
});

app.get('/api/posts/:id', (req, res) => {
    let sql = 'SELECT * FROM posts WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {

    
app.put('/api/posts/:id', (req, res) => {
    let sql = 'UPDATE posts SET post_text = ? WHERE id = ?';
    db.query(sql, [req.body.post_text, req.params.id], (err, result) => {
        if (err) throw err;
        res.json({status: 'success', message: 'Post updated'});
    });
}


app.delete('/api/posts/:id', (req, res) => {
    let sql = 'DELETE FROM posts WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json({status: 'success', message: 'Post deleted'});
    });
}
app.use(express.static('public'));
app.listen(port, () => console.log(`Listening on port ${port}`));