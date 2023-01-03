// Dependencies
const express = require('express');
const app = express();

// creating environment variable port
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// routes to route files
require('./Develop/routes/apiRoutes')(app);
require('./Develop/routes/htmlRoutes')(app);


app.listen(PORT, () => {
    console.log(`Server available at localhost${PORT}`);
});