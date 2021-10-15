const mongoose = require("mongoose");
const schema = mongoose.Schema;
//schema
const userSchema = new schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
});
/**********************model***************/
module.exports = Usermodel = mongoose.model("Usermodel", userSchema);