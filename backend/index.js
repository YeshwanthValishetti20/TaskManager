// const express=require("express");
// const connecttoMongo=require("./db");
// const cors = require('cors');
// connecttoMongo();  //Connecting to mongo


// const app=express();
// const port=80;
// app.use(cors())

// app.use(express.json());

// app.get('/',(req,res)=>{
//     res.send("Hello,Welcome to task manager");
// })

// const auth=require('./routes/auth')
// const lists=require("./routes/lists");
// app.use('/auth',auth);
// app.use('/lists',lists);


// app.listen(port,()=>{
//     console.log(`The express app is running on port ${port}`);
// })

// const express = require("express");
// const connectToMongo = require("./db");
// const cors = require('cors');
// const nodemailer = require('nodemailer'); // Import Nodemailer
// const cron = require('node-cron'); // Import node-cron for scheduling tasks
// const mongoose = require('mongoose'); // Import Mongoose for working with MongoDB
// const { Schema } = mongoose;

// connectToMongo(); // Connecting to MongoDB

// const app = express();
// const port = 80;
// app.use(cors());

// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send("Hello, Welcome to the task manager");
// });

// const auth = require('./routes/auth');
// const lists = require("./routes/lists");
// app.use('/auth', auth);
// app.use('/lists', lists);

// // Define a Mongoose schema for tasks (you can place it in a separate Task.js file)
// const taskSchema = new Schema({
//   description: String,
//   dueDate: Date,
//   recipientEmail: String, // Add an email field to associate tasks with users
// });

// const Task = mongoose.model('Task', taskSchema);

// // Function to send task reminder emails
// const sendTaskReminders = async () => {
//   try {
//     // Create a nodemailer transporter using your Gmail credentials
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'yeshwanth6844@gmail.com', // Your Gmail email address
//         pass: 'iccqgwjjlyzxfiza', // The app password you generated in Gmail
//       },
//     });

//     // Fetch overdue tasks from your database
//     const overdueTasks = await Task.find({
//       dueDate: { $lt: new Date() }, // Find tasks with due dates in the past
//     });

//     // Loop through overdue tasks and send reminders
//     for (const task of overdueTasks) {
//       const mailOptions = {
//         from: 'yeshwanth6844@gmail.com',
//         to: task.recipientEmail,
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

// app.listen(port, () => {
//   console.log(`The express app is running on port ${port}`);
// });

// const express = require("express");
// const connectToMongo = require("./db");
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// const cron = require('node-cron');
// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// connectToMongo();

// const app = express();
// const port = 80;
// app.use(cors());

// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send("Hello, Welcome to the task manager");
// });

// const auth = require('./routes/auth');
// const lists = require("./routes/lists");
// app.use('/auth', auth);
// app.use('/lists', lists);

// const taskSchema = new Schema({
//   description: String,
//   dueDate: Date,
//   recipientEmail: String,
// });

// const Task = mongoose.model('Task', taskSchema);

// // Function to send a task creation email
// const sendTaskCreationEmail = async (task) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'yeshwanth6844@gmail.com',
//         pass: 'iccqgwjjlyzxfiza',
//       },
//     });

//     const mailOptions = {
//       from: 'yeshwanth6844@gmail.com',
//       to: task.recipientEmail,
//       subject: `Task Created: ${task.description}`,
//       text: `You have created a new task: ${task.description}.`,
//     };

//     const result = await transporter.sendMail(mailOptions);
//     console.log('Email sent:', result.response);
//   } catch (error) {
//     console.error('Error sending task creation email:', error);
//   }
// };

// // Create a new task endpoint
// app.post('/tasks', async (req, res) => {
//   try {
//     const { description, dueDate, recipientEmail } = req.body;

//     // Create the task
//     const task = new Task({
//       description,
//       dueDate,
//       recipientEmail,
//     });

//     // Save the task to the database
//     await task.save();

//     // Send a task creation email
//     sendTaskCreationEmail(task);

//     res.status(201).json({ message: 'Task created successfully' });
//   } catch (error) {
//     console.error('Error creating task:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Function to send task reminders
// const sendTaskReminders = async () => {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'yeshwanth6844@gmail.com',
//         pass: 'iccqgwjjlyzxfiza',
//       },
//     });

//     // Fetch overdue tasks from your database
//     const overdueTasks = await Task.find({
//       dueDate: { $lt: new Date() },
//     });

//     for (const task of overdueTasks) {
//       const mailOptions = {
//         from: 'yeshwanth6844@gmail.com',
//         to: task.recipientEmail,
//         subject: `Task Reminder: ${task.description}`,
//         text: `This is a reminder for your task: ${task.description}. It's overdue!`,
//       };

//       const result = await transporter.sendMail(mailOptions);
//       console.log('Email sent:', result.response);
//     }
//   } catch (error) {
//     console.error('Error sending task reminders:', error);
//   }
// };

// // Schedule the task reminder job to run every 2 hours
// cron.schedule('0 */2 * * *', () => {
//   sendTaskReminders();
//   console.log('Task reminder job executed every 2 hours');
// });

// app.listen(port, () => {
//   console.log(`The express app is running on port ${port}`);
// });


const express = require("express");
const connectToMongo = require("./db");
const cors = require('cors');
const nodemailer = require('nodemailer');
const cron = require('node-cron');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const Task = require('./models/Task'); // Import the Task model

connectToMongo();

const app = express();
const port = 8000;
app.use(cors());
app.use(
  cors({

  })
);

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello, Welcome to the task manager");
});

const auth = require('./routes/auth');
const lists = require("./routes/lists");
app.use('/auth', auth);
app.use('/lists', lists);

// Function to send a task creation email
const sendTaskCreationEmail = async (task) => {
  try {
    console.log("Task created")
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'yeshwanth6844@gmail.com',
        pass: 'iccqgwjjlyzxfiza',
      },
    });

    const mailOptions = {
      from: 'yeshwanth6844@gmail.com',
      to: task.recipientEmail,
      subject: `Task Created: ${task.description}`,
      text: `You have created a new task: ${task.description}.`,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent:', result.response);
  } catch (error) {
    console.error('Error sending task creation email:', error);
  }
};

// Create a new task endpoint
app.post('/tasks', async (req, res) => {
  try {
    console.log(req.body.toString());
    const { description, dueDate, recipientEmail } = req.body;

    // Create the task
    const task = new Task({
      description,
      dueDate,
      recipientEmail,
    });
    sendTaskCreationEmail(task);
    // Save the task to the database
    await task.save();
    
    // Send a task creation email
    sendTaskCreationEmail(task);

    res.status(201).json({ message: 'Task created successfully' });
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Function to send task reminders
const sendTaskReminders = async () => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'yeshwanth6844@gmail.com',
        pass: 'iccqgwjjlyzxfiza',
      },
    });

    // Fetch overdue tasks from your database
    const overdueTasks = await Task.find({
      dueDate: { $lt: new Date() },
    });

    for (const task of overdueTasks) {
      const mailOptions = {
        from: 'yeshwanth6844@gmail.com',
        to: task.recipientEmail,
        subject: `Task Reminder: ${task.description}`,
        text: `This is a reminder for your task: ${task.description}. It's overdue!`,
      };

      const result = await transporter.sendMail(mailOptions);
      console.log('Email sent:', result.response);
    }
  } catch (error) {
    console.error('Error sending task reminders:', error);
  }
};

// Schedule the task reminder job to run every 2 hours
cron.schedule('0 */2 * * *', () => {
  sendTaskReminders();
  console.log('Task reminder job executed every 2 hours');
});

app.get('/hello', (req, res) => {
  console.log('Backend is running!'); // This will print to your backend's console
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`The express app is running on port ${8000}`);
  
   
  });

  

