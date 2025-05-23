import express from 'express';
import cors from 'cors';
import connectdb from './config/db.js';
import foodrouter from './routes/addfood.js';
import bodyParser from 'body-parser';

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));

// Serve uploaded files statically
app.use('/Image', express.static('uploads'));

// Register food routes
app.use('/api/food', foodrouter);


connectdb();

app.get('/', (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
