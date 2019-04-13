const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://movie_user:123456m@ds139576.mlab.com:39576/heroku_3r8llkbq', {useNewUrlParser: true});
    mongoose.connection.on('open', ()=>{
        console.log('MongoDB Connected');
    });

    mongoose.connection.on('error', (err)=>{
        console.log('MongoDB: Error', err);
    });
};