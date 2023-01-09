import express from "express"
import { MongoClient } from "mongodb"
import cors from "cors"

import dotenv from "dotenv"

const app = express();
const port = 4000

app.use(cors())
app.use(express.json())
dotenv.config()

const uri = process.env.DATABASE_URI;
const client = new MongoClient(uri);


app.get("/", (_, res) => {
    client.connect((err, db) => {

        console.log("Connecte avec succes a la base de donnee");
        if (err || !db) { return false }
        const posts = db.db("blog").collection("posts");

        posts.find().toArray((err, results) => {
            if (!err) {
                res.status(200).send(results)
            }
        })

    });
})


app.post("/insert", (req, res) => {

    client.connect((err, db) => {
        if (err || !db) return false
        db.db("blog").collection("posts").insertOne(req.body, (err, results) => {
            if (!err) {
                res.status(200).send(results)
            }
        })
    })
})

app.listen(port, () => {
    console.log("Serveur demarre avec success sur le port 4000");
})