const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/server-config');
const {sendBasicEmail}=require('./services/mailService')
const jobs=require('./utils/jobs')
const TicketController=require('./controllers/ticketController');

const setupAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.post('/api/v1/tickets',TicketController.create);

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
       jobs();
    //     sendBasicEmail(
    //     'support@admin.com',
    //     'moviebookingappservice@gmail.com',
    //     'this is a testing emial',
    //     'hiii...'
    //    );
        
    });
}

setupAndStartServer();