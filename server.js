const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to serve static files from the "public" folder
app.use(express.static('public'));

// Route for the homepage
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Only start the server if this file is not imported in a test
if (require.main === module) {
    app.listen(port, () => {
        console.log(`App is running at http://localhost:${port}`);
    });
}

module.exports = app;