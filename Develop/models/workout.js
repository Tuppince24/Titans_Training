const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
    type: Date,
    default: Date.now
  },
  exercises: [
      {
        type: 
            {type: String},
        
        name: {
            type: String,
            trim: true,
            required: "Workout name Required"
          },
        distance: {
            type: Number
          },
        
          duration: {
            type: Number,
            required: "Enter amount of time"
          },
          weight: {
            type: Number
          },
          reps: {
            type: Number
          },
          sets: {
            type: Number
          }
      }]
  

});

const Workouts = mongoose.model("Workouts", WorkoutSchema);

module.exports = Workouts;