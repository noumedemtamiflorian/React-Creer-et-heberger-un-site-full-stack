import express from "express"
const app = express();
const port = 4000

app.get("/", (_, res) => {
    res.send("Hello Express")
})

app.listen(port, () => {
    console.log("Serveur demarre avec success sur le port 4000");
}) 