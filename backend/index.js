const express = require('express');

const userRouter = require('./routers/userRouter');
const storeRouter = require('./routers/storeRouter');
const utilRouter = require('./routers/utils');
const stripe = require("stripe")('sk_test_51N5i2kSE8ALNlcfUeImWOPJjucvuwXy38yixqmADR9BCflGnwkfVUDy2T58YI8FxXSbADNBNK5bkBI4ZSlxSyRNU00guAF4MyK');

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

app.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;
  
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 10000,
      currency: "inr",
      automatic_payment_methods: {
        enabled: true,
      },
    });
  
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  });

app.listen(PORT, () => console.log(`Express server has started at ${PORT}`));