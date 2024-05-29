const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Your React app is running!');
});

app.get('/exit', (req, res) => {
    // Perform actions to stop the server or any other desired actions
    res.send('Server stopped');
    process.exit(0); // This stops the server (not recommended in production)
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});