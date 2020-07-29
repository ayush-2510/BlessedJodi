var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'blessedjodi1998@gmail.com',
    pass: 'blessed_jodi'
  }
});

var mailOptions = {
  from: 'blessed-jodi.com',
  to: 'patel.ayush.h@gmail.com',
  subject: 'Welcome to Blessed Jodi(We match better)',
  html : "<h1 style='text-align:center;color:#d61a1a'>You have been Registered successfully</h1><h3>Thank you for joining with us, we would be grateful to find your soulmate</h3>"
        +"<h4>As a leader in what is sometimes known as the matrimony category, we have touched more than 35 million lives. Blessed Jodi has always differentiated itself from other matrimonials through its innovation-led approach. By redefining the way Indian brides and grooms meet for marriage, Blessed Jodi has created a world-renowned brand that has changed the way of finding a life partner.</h4><h2 style='text-align:center;color:#d61a1a'>Your story is waiting to happen...</h2>"+
        "<a href='http://localhost:4200/' style='font-size:15px;text-align:center'>Click here to visit the website</a>"
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});