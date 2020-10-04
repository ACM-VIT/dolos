const mongoose = require('mongoose');
var url = process.env.MONGODB_URI 


mongoose.connect(url, {
    useNewUrlParser:true,
    useCreateIndex: true,
    autoIndex: false,
    useUnifiedTopology: true 
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err))
