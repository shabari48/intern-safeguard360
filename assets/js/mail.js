const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route to handle form submissions
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // e.g., Gmail, Yahoo, etc.
    auth: {
      user: 'thiyagarajanshanmugam2004@gmail.com',
      pass: 'smaswell55',
    },
  });

  // Compose email
  const mailOptions = {
    from: 'thiyagarajanshanmugam2004@gmail.com',
    to: 'shabari@student.tce.edu',               
    subject: 'New Message from Website Contact Form',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Something went wrong');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
