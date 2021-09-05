const db = require('../db');

class PostController {
    async createPost(req, res) {
        const {title, content, userId} = req.body;
        const newPost = await db.query('INSERT INTO Post (title, content, user_id) values($1, $2, $3) RETURNING *', [title, content, userId]);
        return res.json(newPost.rows[0]);
    }

    async getPostsByUser(req, res) {
        const id = req.query.id;
        const post = await db.query('SELECT * FROM Post WHERE user_id = $1', [id]);
        return res.json(post.rows[0]);
    }
};

module.exports = new PostController();