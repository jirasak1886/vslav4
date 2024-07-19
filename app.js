const express = require('express');
const app = express();
const PORT = process.env.PORT ||3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const writeRead = require('./routes/writeRead');
const updateDelete = require('./routes/updateDelete');
const wRroom = require('./room/wRroom'); // Assuming this is the correct module
const udroom = require('./room/udroom'); //
app.use('/wr', writeRead);
app.use('/ud', updateDelete);
app.use('/rwr', wRroom);
app.use('/rud', udroom);

app.use('/', function (req, res, next) {
    res.sendStatus(404);
});

app.listen(PORT, () =>
    console.log('Server running on port: ' + PORT)
)