import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from './models/Users.model.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());

const uri = process.env.MONGODB_URI

mongoose.connect(uri).then(() => { console.log("Connected to MongoDB Atlas") }).catch(() => { console.log(Error) });

app.get('/data', (req, res) => {
    res.send(sampleData.name);
})
app.get('/', (req, res) => {

    res.status(200).json({ message: 'hey' });
})

app.post('/createuser', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, password: hashedPassword })
        res.status(200).json({ message: "user created successfully" })
        console.log(`account with username : "${username}" created successfully`)

    } catch (error) {

        res.status(500).json({ message: error.message })

    }

}



)

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username });

        if (user) {
            const isMatch = await bcrypt.compare(password, user.password)
            if (isMatch) {
                res.status(200).json({ message: "User successfully logged in!!" });
                console.log(`account with username : "${username}" login successfully`)

            }
        }
        else {
            res.status(400).json({ message: "server error" });
        }



    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }

}

)




app.listen(3000)