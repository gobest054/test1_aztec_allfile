import app from "./app.js";
import mysql from "mysql2"
const PORT = process.env.PORT

app.listen(PORT, ()=>
    console.log(`server on :${PORT}`)
)