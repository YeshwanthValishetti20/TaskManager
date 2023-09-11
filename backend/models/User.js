//creating user schema and model

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    date: {
        type: Date,
        default: Date.now
    }
});
const User=mongoose.model('user', UserSchema)
// User.createIndexes()
module.exports = User

// const mongoose = require('mongoose');
// const nodemailer = require('nodemailer');
// const cron = require('node-cron');

// // Initialize your MongoDB connection
// mongoose.connect('mongodb://127.0.0.1:27017/games', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const UserSchema = new mongoose.Schema({
//   name: String,
//   email: {
//     type: String,
//     unique: true,
//   },
//   password: String,
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const User = mongoose.model('user', UserSchema);

// // Create a nodemailer transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail', // e.g., Gmail
//   auth: {
//     user: 'yeshwanth6844@gmail.com',
//     pass: 'iccqgwjjlyzxfiza',
//   },
// });

// // Function to send a welcome email
// function sendWelcomeEmail(email) {
//   const mailOptions = {
//     from: 'yeshwanth6844@gmail.com',
//     to: email,
//     subject: 'Welcome to Your App',
//     text: 'Welcome to our app! Thank you for signing up.',
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//     } else {
//       console.log('Email sent:', info.response);
//     }
//   });
// }

// // Function to send reminders to users
// function sendRemindersToUsers() {
//   console.log('Sending reminders to users...');

//   // Fetch all users
//   User.find({}, (err, users) => {
//     if (err) {
//       console.error('Error fetching users:', err);
//     } else {
//       users.forEach((user) => {
//         // Send a reminder email to each user
//         sendReminderEmail(user.email);
//       });
//     }
//   });
// }

// // Function to send a reminder email
// function sendReminderEmail(email) {
//   const mailOptions = {
//     from: 'yeshwanth6844@gmail.com',
//     to: email,
//     subject: 'Reminder',
//     text: 'This is a reminder email.',
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending reminder email:', error);
//     } else {
//       console.log('Reminder email sent:', info.response);
//     }
//   });
// }

// // Schedule a task to send reminders every hour
// cron.schedule('0 * * * *', () => {
//   sendRemindersToUsers();
// });

// module.exports = { User, sendWelcomeEmail };
