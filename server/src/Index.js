const express = require("express");
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.set('port', process.env.PORT || 3001);
app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


app.use(require('./Routes/Home'));
app.use(require('./Routes/Users'));
app.use(require('./Routes/Pokemon'));


app.listen(app.get('port'), () => {
    console.log(`Server on port: ${app.get('port')}`);
});