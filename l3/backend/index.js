import express from 'express'
import cors from 'cors'
import { join, dirname} from 'path'
import { Low, JSONFile } from "lowdb"
import { fileURLToPath } from 'url'


const app = express()
const port = 3000

// Use JSON file for storage
const file = join(dirname(fileURLToPath(import.meta.url), ), 'db.json');
const adapter = new JSONFile(file)
const db = new Low(adapter)
// Read data from JSON file, this will set db.data content
await db.read()

// If file.json doesn't exist, db.data will be null
// Set default data
db.data ||= { users: [] }

const corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.post('/register', async (req, res) => {
    const data = req.body
    if (db.data.users.some(user => user.email === data.email)) {
        res.status(400).send()
        return
    }

    db.data.users.push({ email: data.email, password: data.password, birth: data.birth, sex: data.sex })
    res.status(200).send()
    await db.write()
})

app.post('/login', async (req, res) => {
    const data = req.body
    const user = db.data.users.find(user => user.email === data.email)
    if (user && user.password === data.password) {
        res.json(user).send()
    } else {
        res.status(401).send()
    }
})

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`)
})