const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// grace:
// setup and export Transaction schema via Mongoose
const transactionSchema = new Schema({
  name: {
    type: String,
    // grace:
    // remove leading & trailing whitespace
    trim: true,
    required: "Enter a name for transaction"
  },
  value: {
    type: Number,
    required: "Enter an amount"
  },
  date: {
    type: Date,
    // grace:
    // add a default value in case .date is not specified
    default: Date.now
  }
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
