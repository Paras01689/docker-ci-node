import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 5500;

app.get('/', (req, res) => {
    res.send("Hello World This is a simple Node.js app running in a Docker container! ");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
