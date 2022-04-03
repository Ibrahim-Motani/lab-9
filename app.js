const express = require('express');
const app = express();
app.use(express.static("./"));
const port = 3333;

app.get('/', (req, res) => {
    res.sendFile('./index.html');
})

app.listen(port, () => {
    console.log('Server running on port:', port);
});