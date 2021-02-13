require("dotenv").config();
const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const { response } = require("express");
const router = express().Router();

const transport = {
  host: "smtp.gmail.com",
  port: 456,
  secure: true,

  auth: {
    user: process.env.SMTP_TO_MAIL,
    pass: process.env.SMTP_TO_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(transport);
transporter.verify((err, success) => {
  if (err) {
    console.error(err);
  } else {
    console.info("Ready to send mail");
  }
});

router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "working" });
});

router.post("/", (req, res, next) => {
  const mail = {
    from: process.env.SMTP_FROM_EMAIL,
    to: process.env.SMTP_TO_EMAIL,
    subject: "New contact form submission",
    text: `
        from:
        ${req.body.name}

        contact details
        email: ${req.body.email}
        phone: ${req.body.tel}

        message:
        ${req.body.message}
        `,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({ status: "fail" });
    } else {
      res.json({ status: "success" });
    }
  });
});

router.use("/api", (req, res) => {
  res.set("Content-Type", "application/json");
  res.send('{"message":"Hello from the custom server!"}');
});

router.use("*", (req, res) => {
  response.sendFile(path.resolve(__dirname, "/react-ui/build", "index.html"));
});

module.exports = router;
