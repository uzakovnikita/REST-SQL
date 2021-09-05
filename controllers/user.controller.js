const db = require('../db');

class UserController {
    async createUser(req, res) {
        const {name, surname} = req.body;
        const newPerson = await db.query(`INSERT INTO Person (name, surname) values ($1, $2) RETURNING *`, [name, surname]);
        return res.json(newPerson.rows[0]);
    }

    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM Person');
        return res.json(users.rows[0]);
    }

    async getOneUser(req, res) {
        const id = req.params.id;
        const user = await db.query('SELECT * FROM Person WHERE id = $1', [id]);
        return res.json(user.rows[0]);
    }

    async updateUser(req, res) {
        const {id, name, surname} = req.body;
        const user = await db.query('UPDATE Person set name = $1, surname = $2 where id = $3 RETURNING *', [id, name, surname]);
        return res.json(user.rows[0]);
    }

    async deleteUser(req, res) {
        const id = req.params.id;
        const user = await db.query('DELETE FROM Person WHERE id = $1', [id]);
        return res.json(user.rows[0]);
    }
};

module.exports = new UserController();
