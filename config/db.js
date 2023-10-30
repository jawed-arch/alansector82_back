const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/,alansector82')
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Connected!'))
.catch(err=>{
    console.log(err)
})