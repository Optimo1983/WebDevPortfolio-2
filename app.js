const    express = require('express'),
         app = express(),
         bodyParser = require('body-parser'),
         nodemailer = require('nodemailer'),
         path = require('path');
         port = process.env.PORT || 3000;

         require('dotenv').config();


app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
   res.render('index.ejs');
});



const transporter = nodemailer.createTransport({
   service: 'gmail',
   secure: false,
   requireTLS: true,
   auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD
   }
});

app.post('/contact', (req, res) => {
   console.log(req.body.email);
   const mailOptions = {
      from: `${req.body.email} <${process.env.USER}>`,
      to: process.env.USER,
      subject: 'WebDev Portfolio Message',
      text: req.body.message,
      html: `<p>${req.body.name} at ${req.body.email} sent you the following message:</p>
             <p>${req.body.message}</p>`
   };

   transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error.message);
      } else {
          console.log("Contact request email sent!");
      }
  });

});



app.listen(port, () => {
   console.log(`App is running on port ${port}`);
});