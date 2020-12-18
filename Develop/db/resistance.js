const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LeftSchema = new Schema({
    name: {
    type: String,
    trim: true,
    required: "Workout name Required"
  },

  weight: {
    type: Number,
    required: "Enter weigh amount",
  },

  sets: {
    type: Number,
    required: "Enter amount of set"
  },

  reps: {
    type: Number,
    required: "Enter amount of set"
  },

  duration: {
    type: Number,
    required: "Enter amount of time"
  },

  data: {
    type: Date,
    default: Date.now
  }
});

const Left = mongoose.model("Left", LeftSchema);

module.exports = Left;