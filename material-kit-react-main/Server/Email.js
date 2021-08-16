var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mew12382@gmail.com",
    pass: "L@nternFoxes45",
  },
});

var mailOptions = {
  from: "mew12382@gmail.com",
  to: "k.haynes3238@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
