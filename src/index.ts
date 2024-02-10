import { Client } from 'pg';

// Async function to insert data into a table
const client = new Client({
    connectionString: "postgresql://Vishal-Maharathy:FmND6pBqz7OE@ep-frosty-limit-a5cnz0na.us-east-2.aws.neon.tech/test1?sslmode=require"
})
async function connectToDB() {
    try {
        await client.connect()
        console.log("Connected to DB")
    } catch (err) {
        console.error(err)
    }
}
connectToDB()
async function createUserTable() {
    try{
        let table = await client.query(`
            CREATE TABLE users (
                id serial PRIMARY KEY,
                name text,
                email text UNIQUE NOT NULL,
                password text
            )
        `)
    }catch(e) {
        console.error(e)
    }
}
// createUserTable().catch(e => console.error(e.stack))
async function insertData() {
    let data = await client.query(`
        INSERT INTO users (name, email, password)
        VALUES ('Vishal', 'vishalmaharathy78@gmail.com', 'password')`)
    if(data) {
        console.log("Data inserted")
    }else{
        console.error("Data not inserted")
    }
}
// insertData()
async function readData() {
    let data = await client.query('SELECT * FROM users')
    console.error(data.rows)
}
readData()