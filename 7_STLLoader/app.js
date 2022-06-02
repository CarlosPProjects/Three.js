
const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'))

// __dirname : PS F:\ThreeJs\7_STLLoader>
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(3000, ()=> {
    console.log('server runing on port', 3000);
})