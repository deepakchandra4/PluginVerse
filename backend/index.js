const express = require('express');

const userRouter = require('./routers/userRouter');
const storeRouter = require('./routers/storeRouter');
const utilRouter = require('./routers/utils');


const cors = require('cors');
const { PORT } = require('./config');

const app = express();

app.use(cors(
    {
        origin : '*',
        
        credentials : true
    }
));
app.use(express.json());
// app.use(express.urlencoded({extended : true}));
app.use('/user', userRouter);
app.use('/util', utilRouter);
app.use('/store', storeRouter);

app.use(express.static('./archives'));
app.use(express.static('./scripts'));
app.use(express.static('./static/uploads'));

app.get('/', (req, res) => {
    console.log('Request at index');
    res.status(299).send('Working Perfectly!!');
})

app.listen(PORT, () => console.log(`Express server has started at ${PORT}`));