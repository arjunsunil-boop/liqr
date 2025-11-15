import express from 'express';
import mongoose from 'mongoose';


const app = express();
app.use(express.json());

const sampleData = { "name": "Arjun" };

mongoose.connect('mongodb+srv://LiqrDB:rIzZduWFHy7rjcTE@liqrdb.vob9ld1.mongodb.net/?appName=LiqrDB').then(() => { console.log("connected to mongodb") }).catch(() => { console.log(Error) });

app.get('/data', (req, res) => {
    res.send(sampleData.name);
})
app.get('/', (req, res) => {

    res.status(200).json({ message: 'hey' });
})




app.listen(3000)