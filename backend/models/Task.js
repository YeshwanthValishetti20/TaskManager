// const mongoose = require('mongoose');

// const reminderSchema = new mongoose.Schema({
//   reminderDate: {
//     type: Date,
//     required: true,
//   },
//   reminderSent: {
//     type: Boolean,
//     default: false,
//   },
// });

// const taskSchema = new mongoose.Schema({
//   listId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'list',
//   },
//   description: {
//     type: String,
//     required: true,
//     minLength: 5,
//   },
//   dueDate: {
//     type: Date,
//     // You can adjust the minimum date constraint if needed
//   },
//   assignedDate: {
//     type: Date,
//     default: Date.now,
//   },
//   isCompleted: {
//     type: Boolean,
//     default: false,
//   },
//   reminders: [reminderSchema], // Include an array of reminders
// });

// // Define and export the Task model
// const Task = mongoose.model('Task', taskSchema);
// module.exports = Task;


const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  listId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'list',
  },
  description: {
    type: String,
    required: true,
    minLength: 5,
  },
  dueDate: {
    type: Date,
    // You can adjust the minimum date constraint if needed
  },
  assignedDate: {
    type: Date,
    default: Date.now,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  recipientEmail:{
    type: String,
    default: '',

  }
});

// Define and export the Task model
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;


// const mongoose = require('mongoose');

// const TaskSchema = new mongoose.Schema({
//     listId:{  //this will tell that the task is of which list
//         type:mongoose.Schema.Types.ObjectId,
//         ref:'list'
//     },
//     description:{
//         type:String,
//         required:true,
//         minLength:5
//     },
//     dueDate:{
//         type:Date,
//         min:Date.now
//     },
    
//     assignedDate:{
//         type:Date,
//         default:Date.now
//     },
//     isCompleted:{
//         type:Boolean,
//         default:false
//     }
// });

// module.exports= mongoose.model('task',TaskSchema);


// models/Task.js

// const mongoose = require('mongoose');

// // Schema for storing task details in the database
// const taskSchema = new mongoose.Schema({
//   description: String,
//   dueDate: Date,
//   recipientEmail: String,
//   isCompleted: Boolean,
// });

// // Schema for sending task reminders via SMTP
// const reminderSchema = new mongoose.Schema({
//   description: String, // Task description for the reminder
//   dueDate: Date,       // Due date for the task
//   recipientEmail: String, // Email address of the recipient
// });

// // Export both schemas
// module.exports = {
//   Task: mongoose.model('Task', taskSchema),       // Use this for storing task details
//   Reminder: mongoose.model('Reminder', reminderSchema), // Use this for sending reminders via SMTP
// };


// const mongoose = require('mongoose');

// // Schema for storing task details in the database
// const taskSchema = new mongoose.Schema({
//   description: String,
//   dueDate: Date,
//   recipientEmail: String,
//   isCompleted: Boolean,
// });

// // Schema for sending task reminders via SMTP
// const reminderSchema = new mongoose.Schema({
//   description: String, // Task description for the reminder
//   dueDate: Date,       // Due date for the task
//   recipientEmail: String, // Email address of the recipient
// });

// // Create models for both schemas
// const Task = mongoose.model('Task', taskSchema);
// const Reminder = mongoose.model('Reminder', reminderSchema);

// // Export both models
// module.exports = { Task, Reminder };
