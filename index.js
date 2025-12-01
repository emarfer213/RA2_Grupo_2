import express from 'express'
import os from 'node:os';

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Bienvenido a TextMaster API. Servidor: ' + os.hostname);
})

app.listen(3000)
console.log('Server is running on http://localhost:3000');