import express from "express"
import { MongoClient, ServerApiVersion } from "mongodb"
import dotenv from "dotenv"

const app = express();
const port = 4000
dotenv.config()

const uri = process.env.DATABASE_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    // const collection = client.db("test").collection("devices");
    // // perform actions on the collection object
    console.log("Connecte avec succes a la base de donnee");
    client.close();
});


app.get("/", (_, res) => {
    res.send("Hello Express")
})

app.listen(port, () => {
    console.log("Serveur demarre avec success sur le port 4000");
}) 