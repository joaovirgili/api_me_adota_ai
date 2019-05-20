import express from "express";
import { Connection, MysqlError } from "mysql";
import bodyParser from "body-parser";
var cors = require('cors')

const db: Connection = require("./service/mysql.ts");

const app: express.Application = express();
const port = 5000;
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.send('Hello Api');
});

app.get('/pets', (req, res, next) => {
    let sql = "SELECT * FROM Pet";
    db.query(sql, (error: MysqlError, result) => {
        if (error) {
            res.json(error);
        }
        res.json(result);
    });
})

app.listen(port, () => console.log('Server running at port: ', port));