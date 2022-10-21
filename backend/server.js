require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors({
    origin: '*',
}))


app.use(express.json())
app.use('/backend/uploads', express.static('./backend/uploads'))

//app.use(bodyParser.json())

app.use('/products', require('./routes/productRoute') )
app.use('/users', require('./routes/userRoute'))

app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message: 'Something went wrong'
    })
})

app.listen(9000, ()=> {console.log("Server started at http://localhost:9000")})