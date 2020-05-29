require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./router');

const app = express();
const port = 4201;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));


//END POINTS//
app.use('/', router);

//END POINTS//

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`app listening at http://localhost:${port}`));