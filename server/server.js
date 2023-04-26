const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
require('dotenv').config({ path: './config.env' });
const port = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());
app.use(require('./routes/record'));
// get driver connection
const dbo = require('./db/conn.js');

// Serve that static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, () => {
    //perform a database connection when server starts
    dbo.connectToServer(function (err) {
        if (err) console.error(err)
    });
    console.log(`Server is running on port: ${port}`);
});