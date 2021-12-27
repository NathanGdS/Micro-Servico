const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());



app.use('/s1', proxy('http://localhost:8001'));
app.use('/s2', proxy('http://localhost:8002'));
app.use('/s3', proxy('http://localhost:8003'));



app.listen(PORT, () => {
    console.log(`Gateway is running on port ${PORT}`);
})