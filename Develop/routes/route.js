//const router = require("express").Router();
//const Workouts = require("../models/workouts");
var db = require("../models");

module.exports = function(app){
//create the body for cardio
app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create({body})
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
    });
});

app.put("/api/workouts/:id", ({ body, params }, res) =>{
    db.Workout.findByIdAndUpdate(params.id, 
        {
            $push:{exercises: [body]}
        },{
            new: true
        }).then(dbWorkouts => {
            res.json(dbWorkouts);
          })
          .catch(err => {
            res.status(400).json(err);
    });
})


//finding data for left
app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
    });
});

app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
    });
});


}