import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from 'mongodb';

dotenv.config();

const uri = process.env.DATABASE_URI;
const DATABASE = "blog";

const client = new MongoClient(uri);
module.exports = {
    client: (callback) => {
        client.connect((err, db) => {
            if (err || !db) { return false }
            callback(db.db(DATABASE))
        });
    }
}
