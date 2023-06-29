const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
app.use('*', async (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});
app.listen(5000);