import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',          // Имя пользователя PostgreSQL
    host: 'localhost',         // Хост, где работает PostgreSQL
    database: 'lessons_db',    // Имя базы данных
    password: 'your_password', // Пароль пользователя
    port: 5432,                // Порт PostgreSQL
});

export const query = (text: string, params?: any[]) => {
    return pool.query(text, params);
};
