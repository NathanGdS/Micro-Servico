const express = require('express');

const PORT = 8001;

const app = express();

app.use(express.json());

app.use('/', (req, res) => {
    return res.json({"msg": "Hello from s1"});
})

app.listen(PORT, () => {
    console.log(`s1 is running on port ${PORT}`);
})