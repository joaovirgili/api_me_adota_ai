// const mysql = require('mysql');
import mysql, { Connection } from 'mysql';

const db: Connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'MeAdotaAi2'
});

db.connect((error: any) => {
    if (error) {
        console.error('Database connection error', error);
        return;
    }
    console.log('Database connected');
});

export = db;