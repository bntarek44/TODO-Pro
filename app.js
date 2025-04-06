const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const BookRouter = require("./bookroutes")
const PORT = 3032;



app.use(express.json());
app.use('/' , BookRouter);



app.use((req,res)=>{
    res.status(404).send({url : req.originalUrl + ' not found'});
})








const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
        });
        console.log('✅  MongoDB success!');
    } catch (error) {
        console.error('❌ MongoDB failed:', error);
        process.exit(1); // إنهاء العملية إذا فشل الاتصال
    }
};

// تشغيل الاتصال
connectDB();









const server = app.listen(PORT, () => {
    console.log(`🚀 EXpress success:${PORT}`);
});