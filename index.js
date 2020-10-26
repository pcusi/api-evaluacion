const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

/* rutas */
const reqresRoute = require('./routes/reqres');

app.use(reqresRoute);

app.listen(port, () => {

    console.log(`http://localhost:${port}/`)

});