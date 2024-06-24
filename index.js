import express from 'express';
import cors from 'cors';
import { db } from './database.js';
import { users, Iuser } from './users.js';

const app = express();
const port = 3001;

db();
app.use(cors());

app.get("/", async (req, res) => {
    try {
        const usersData = await users.find({});
        const info = usersData.map(item => new Iuser(item.user, item.mail));
        res.json(info)
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Error fetching users');
    }
});

app.listen(port, () => {
    console.log('Todo bien en el puerto: ' + port);
});