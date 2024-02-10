"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// Async function to insert data into a table
const client = new pg_1.Client({
    connectionString: "postgresql://Vishal-Maharathy:FmND6pBqz7OE@ep-frosty-limit-a5cnz0na.us-east-2.aws.neon.tech/test1?sslmode=require"
});
function connectToDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            console.log("Connected to DB");
        }
        catch (err) {
            console.error(err);
        }
    });
}
connectToDB();
function createUserTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let table = yield client.query(`
            CREATE TABLE users (
                id serial PRIMARY KEY,
                name text,
                email text UNIQUE NOT NULL,
                password text
            )
        `);
        }
        catch (e) {
            console.error(e);
        }
    });
}
// createUserTable().catch(e => console.error(e.stack))
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield client.query(`
        INSERT INTO users (name, email, password)
        VALUES ('Vishal', 'vishalmaharathy78@gmail.com', 'password')`);
        if (data) {
            console.log("Data inserted");
        }
        else {
            console.error("Data not inserted");
        }
    });
}
// insertData()
function readData() {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield client.query('SELECT * FROM users');
        console.error(data.rows);
    });
}
readData();
