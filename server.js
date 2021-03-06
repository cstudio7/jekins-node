var express = require('express')
var bodyParser = require('body-parser');
var cors = require('cors');
var dotenv = require('dotenv');
const app = express();

dotenv.config();

const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());


app.get('/', function (req, res) {
    res.send('Welcome to Jekins Demo');
});

const server = app.listen(port, () => {
    console.info(`Server is up and listening on jekins port ${port}`);
});
