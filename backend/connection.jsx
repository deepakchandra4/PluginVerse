const mongoose = require('mongoose');

const url = 'mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/mern9302023?retryWrites=true&w=majority';

mongoose.connect(url)
.then((result) => {
    console.log('server connected');
})
.catch((err) => {
    console.error(err);
});

module.exports = mongoose;