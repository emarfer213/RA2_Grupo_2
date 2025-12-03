import express from 'express'
import morgan from 'morgan';
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

app.get('/analyze', (req, res) => {
    const { text } = req.query;

    if (!text) {
        return res.status(400).json({ error: "Missing 'text' parameter" });
    }

    res.json({result: analyze(text)})
})

export function analyze(text) {
    let textLength = text.length;
    let wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    let hasNumbers = /\d/.test(text);

    return {
        length: textLength,
        word_count: wordCount,
        has_numbers: hasNumbers
    }
}

export function reverse(text){
    return text.split("").reverse().join("");
}

app.listen(3000)
console.log('Server is running on http://localhost:3000');