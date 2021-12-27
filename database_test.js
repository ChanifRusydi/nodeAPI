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
    database: 'media_sosial'
});
//sending data
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
//fetching data
app.get('/posts', (req, res) => {
    let sql = 'SELECT post_id, username, post, DATE_FORMAT(post_date, "%d-%m-%Y") AS post_date FROM posts';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json({"status": 200, data: result, message: 'Posts fetched'});
    });
});