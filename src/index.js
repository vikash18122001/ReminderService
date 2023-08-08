const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/server-config');
const {sendBasicEmail}=require('./services/mailService')


const setupAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
        sendBasicEmail(
        'support@admin.com',
        'moviebookingappservice@gmail.com',
        'this is a testing emial',
        'hiii...'
       );
        
    });
}

setupAndStartServer();