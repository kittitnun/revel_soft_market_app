const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5001;

var publicDir = require('path').join(__dirname, '/public_images/');
app.use(express.static(publicDir));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    const origin = req.get('origin');
    // TODO Add origin validation
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma');

    // intercept OPTIONS method
    if (req.method === 'OPTIONS') {
        res.sendStatus(204);
    } else {
        next();
    }
});

app.listen(port, () => {
    console.log('API Start server at port ' + port + '.');
})

var appRouteUpload = require('./routes/appRouteUpload');
var appRouteUser = require('./routes/appRouteUser');
var appRouteShop = require('./routes/appRouteShop');
var appRouteNews = require('./routes/appRouteNews');

appRouteUpload(app); //upload the route
appRouteUser(app);
appRouteShop(app);
appRouteNews(app);