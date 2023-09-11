// // server/routes/emailRoutes.js
// const express = require('express');
// const router = express.Router();
// const nodemailer = require('nodemailer');

// // Define a route to send emails
// router.post('/send-email', async (req, res) => {
//   try {
//     // Create a nodemailer transporter using your Gmail credentials
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'yeshwanthvalishetti20@gmail.com.com', // Your Gmail email address
//         pass: 'iccqgwjjlyzxfiza', // The app password you generated in Step 3 of the Nodemailer setup
//       },
//     });

//     // Define the email message
//     const mailOptions = {
//       from: 'yeshwanthvalishetti20@gmail.com',
//       to: 'recipient@example.com',
//       subject: 'Sample Email Subject',
//       text: 'This is a sample email body.',
//     };

//     // Send the email
//     const result = await transporter.sendMail(mailOptions);

//     console.log('Email sent:', result.response);
//     res.status(200).json({ message: 'Email sent successfully' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ message: 'Email sending failed' });
//   }
// });

// module.exports = router;
// server/routes/emailRoutes.js
// server/routes/emailRoutes.js
// const express = require('express');
// const router = express.Router();
// const nodemailer = require('nodemailer');
// const cron = require('node-cron');
// const Task = require('../models/Task'); // Import your Mongoose Task model

// // Function to send task reminder emails
// const sendTaskReminders = async () => {
//   try {
//     // Create a nodemailer transporter using your Gmail credentials
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'yeshwanth6844@gmail.com',
//         pass: 'iccqgwjjlyzxfiza',
//       },
//     });

//     // Fetch overdue tasks from your MongoDB database
//     const currentDate = new Date();
//     const overdueTasks = await Task.find({
//       dueDate: { $lt: currentDate }, // Find tasks with due dates in the past
//       isCompleted: false, // Optionally, filter by tasks that are not completed
//     });

//     // Loop through overdue tasks and send reminders
//     for (const task of overdueTasks) {
//       const mailOptions = {
//         from: 'yeshwanth6844@gmail.com',
//         to: task.recipientEmail, // Assuming you have a recipientEmail field in your Task schema
//         subject: `Task Reminder: ${task.description}`,
//         text: `This is a reminder for your task: ${task.description}. It's overdue!`,
//       };

//       // Send the email
//       const result = await transporter.sendMail(mailOptions);
//       console.log('Email sent:', result.response);
//     }
//   } catch (error) {
//     console.error('Error sending task reminders:', error);
//   }
// };

// // Schedule the task reminder job to run every day at a specific time (adjust as needed)
// cron.schedule('0 9 * * *', () => {
//   // Run the task reminder function
//   sendTaskReminders();
//   console.log('Task reminder job executed at 9:00 AM daily');
// });

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const nodemailer = require('nodemailer');
// const cron = require('node-cron');
// const Task = require('../models/Task'); // Import your Mongoose Task model

// // Function to send task reminder emails
// const sendTaskReminders = async () => {
//   try {
//     // Create a nodemailer transporter using your Gmail credentials
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'yeshwanth6844@gmail.com',
//         pass: 'iccqgwjjlyzxfiza',
//       },
//     });

//     // Fetch overdue tasks from your MongoDB database
//     const currentDate = new Date();
//     const overdueTasks = await Task.find({
//       dueDate: { $lt: currentDate }, // Find tasks with due dates in the past
//       isCompleted: false, // Optionally, filter by tasks that are not completed
//     });

//     if (overdueTasks.length === 0) {
//       console.log('No overdue tasks found.');
//       return;
//     }

//     // Loop through overdue tasks and send reminders
//     for (const task of overdueTasks) {
//       const mailOptions = {
//         from: 'yeshwanth6844@gmail.com',
//         to: task.recipientEmail, // Assuming you have a recipientEmail field in your Task schema
//         subject: `Task Reminder: ${task.description}`,
//         text: `This is a reminder for your task: ${task.description}. It's overdue!`,
//       };

//       // Send the email
//       const result = await transporter.sendMail(mailOptions);
//       console.log('Email sent for task:', task._id, result.response);
//     }
//   } catch (error) {
//     console.error('Error sending task reminders:', error);
//   }
// };

// // Schedule the task reminder job to run every day at a specific time (adjust as needed)
// cron.schedule('0 9 * * *', () => {
//   // Run the task reminder function
//   sendTaskReminders();
//   console.log('Task reminder job executed at 9:00 AM daily');
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cron = require('node-cron');
const Task = require('../models/Task'); // Import your Mongoose Task model

// Function to send task reminder emails
const sendTaskReminders = async () => {
  try {
    // Create a nodemailer transporter using your Gmail credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'yeshwanth6844@gmail.com',
        pass: 'iccqgwjjlyzxfiza',
      },
    });

    // Fetch overdue tasks from your MongoDB database
    const currentDate = new Date();
    const overdueTasks = await Task.find({
      dueDate: { $lt: currentDate }, // Find tasks with due dates in the past
      isCompleted: false, // Optionally, filter by tasks that are not completed
    });

    if (overdueTasks.length === 0) {
      console.log('No overdue tasks found.');
      return;
    }

    // Loop through overdue tasks and send reminders
    for (const task of overdueTasks) {
      const mailOptions = {
        from: 'yeshwanth6844@gmail.com',
        to: task.recipientEmail, // Assuming you have a recipientEmail field in your Task schema
        subject: `Task Reminder: ${task.description}`,
        text: `This is a reminder for your task: ${task.description}. It's overdue!`,
      };

      // Send the email
      const result = await transporter.sendMail(mailOptions);
      console.log('Email sent for task:', task._id, result.response);
    }
  } catch (error) {
    console.error('Error sending task reminders:', error);
  }
};

// Create a route to manually trigger sending task reminders
router.get('/send-reminders', (req, res) => {
  try {
    sendTaskReminders();
    res.status(200).json({ message: 'Task reminders sent successfully' });
  } catch (error) {
    console.error('Error sending task reminders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

