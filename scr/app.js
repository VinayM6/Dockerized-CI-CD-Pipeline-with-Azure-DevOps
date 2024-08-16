const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/greet', (req, res) => {
    res.json({
        message: "Hello this my sample Node.js API!",
        about: "This application is designed to demonstrate a basic integration between Node.js and a front-end HTML page.\nIt is also used to build a CI/CD pipeline using Azure DevOps to automate the deployment of Dockerized applications."
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
