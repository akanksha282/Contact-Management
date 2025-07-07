const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: {
     type: String, 
    required: [true,"FirstName is required"]
  },
  lastName: { 
    type: String
   },
  address: { 
    type: String ,
    required:[true,"Address is required"]

    },
  email: { 
    type: String,
    required: true, 
    unique: true, 
    match: /.+\@.+\..+/
 },
  phone: { 
    type: String, 
    required: true, 
    unique: true
 }
},{timestamps:true});

  module.exports = mongoose.model('Contact', contactSchema);