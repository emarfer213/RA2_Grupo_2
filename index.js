import express from 'express'
import morgan from 'morgan';
import { log } from 'node:console';
import os from 'node:os';

const app = express();

app.use(express.json());

app.use(morgan('combined'))


app.get('/', (req, res) => {
    res.send('Bienvenido a TextMaster API. Servidor: ' + os.hostname);
})

app.get('/reverse', (req, res) => {
    const { text } = req.query;

    if (!text) {
        return res.status(400).json({ error: "Missing 'text' parameter" });
    }

    res.json({ result: reverse(text) });
});

app.get('/transform', (req, res) => {
    const { text, action } = req.query;

    log({ text, action });
    if (!text || !action) {
        return res.status(400).json({ error: "Missing 'text' or 'action' parameter" });
    }

    let result;

    try {
        result = transform(text, action);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }

    res.json({ result });

});


export function reverse(text){
    return text.split("").reverse().join("");
}

export function transform(text, action){
    switch (action) {
        case 'upper':
            return text.toUpperCase();
        case 'lower':
            return text.toLowerCase();
        default:
            return "Error: Invalid 'action' parameter";
    }
}

app.listen(3000)
console.log('Server is running on http://localhost:3000');