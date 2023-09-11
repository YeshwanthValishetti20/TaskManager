// const mongoose = require('mongoose');

// const ListSchema = new mongoose.Schema({
//     user:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:'user'
//     },
//     title: {
//         type: String,
//         required: true,
//         minLength: 2,
//         trim: true
//     }
// });

// module.exports = mongoose.model('list', ListSchema);

const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  title: {
    type: String,
    required: true,
    minLength: 2,
    trim: true
  },
  description: String, // Add a description field
  dueDate: Date,       // Add a dueDate field
  recipientEmail: String, // Add a recipientEmail field
  isCompleted: Boolean // Add an isCompleted field
});

module.exports = mongoose.model('list', ListSchema);
