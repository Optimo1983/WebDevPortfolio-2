const    express = require('express'),
         app = express(),
         nodemailer = require('nodemailer'),
         path = require('path');
         port = process.env.PORT || 3000;

         require('dotenv').config();

app.use(express.static(__dirname + "/public"));

// const transporter = nodemailer.createTransport({
//    service: 'gmail',
//    auth: {
//       user: process.env.USER,
//       pass: process.env.PASSWORD
//    }
// });


app.get('/', (req, res) => {
   res.render('index.ejs');
});




app.listen(port, () => {
   console.log(`App is running on port ${port}`);
});