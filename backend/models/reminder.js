const mongoose = require('mongoose');

// Schema for sending task reminders via SMTP
const reminderSchema = new mongoose.Schema({
  description: String, // Task description for the reminder
  dueDate: Date,       // Due date for the task
  recipientEmail: String, // Email address of the recipient
});

// Create a model for the reminder schema
const Reminder = mongoose.model('Reminder', reminderSchema);

// Export the Reminder model
module.exports = Reminder;
