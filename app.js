const express = require( 'express' );
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const app = express();

// EJS
app.use(expressLayouts)
app.set("view engine", "ejs")




// Routes 

app.use('/',require('./routes/index'))
app.use('/users',require('./routes/users'))


const PORT =  process.env.PORT || 3000;

app.listen( PORT, () => {
    console.log(`Server is running on port ${PORT} on http://localhost:${PORT}`);
});

