const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/api/news', (req, res) => {
    res.json([{ title: "Нова туристична подія!", date: "2025-06-07" }]);
});

app.listen(3000, () => {
    console.log('✅ Сервер запущено на порт 3000');
});
