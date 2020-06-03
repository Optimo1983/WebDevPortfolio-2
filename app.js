const    express = require('express'),
         app = express(),
         compression = require('compression'),
         nodemailer = require('nodemailer'),
         port = process.env.PORT || 3000;
         require('dotenv').config();

// === EXPRESS MIDDLEWARE ===
// ===============================================
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(compression());

// === NODEMAILER CONFIG ===
// ===============================================
const transporter = nodemailer.createTransport({
   service: 'gmail',
   secure: false,
   requireTLS: true,
   auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD
   }
});

// === ROUTES ===
// ===============================================
app.get('/', (req, res) => {
   res.render('index.ejs');
});

app.post('/api/contact', (req, res) => {
   const { name, email, message } = req.body;

   const mailOptions = {
      from: `${email} <${process.env.USER}>`,
      to: process.env.USER,
      subject: 'WebDev Portfolio Message',
      text: message,
      html: `<p>${name} at ${email} sent you the following message:</p>
             <p>${message}</p>`
   };

   transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
         res.send(false);
         return console.log(error.message);
      } else {
          res.send(true);
      }
  });

});

// === SERVER ===
// ===============================================
app.listen(port, () => {
   console.log(`App is running on port ${port}`);
});