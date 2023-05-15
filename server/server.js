import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employee"
})

con.connect(function(err) {
    if(err) {
        console.log("Error in connection");
    } else {
        console.log ("Connected")
    }
})

app.listen(8000, () => {
    console.log("Running");
})