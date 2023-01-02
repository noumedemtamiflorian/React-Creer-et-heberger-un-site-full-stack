import express from "express"
const app = express();
const port = 4000

app.listen(port, () => {
    console.log("Serveur demarre avec success sur le port 4000");
}) 