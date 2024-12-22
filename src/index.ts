import express from 'express';
import { query } from './db';

const app = express();
app.use(express.json());


// Добавление нового занятия
app.post('/lessons', async (req, res) => {
    const { title, description } = req.body;

    try {
        const result = await query('SELECT * FROM lessons');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Ошибка сервера');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
