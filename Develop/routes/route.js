const router = require("express").Router();
const Cardio = require("../db/cordio");
const Left = require("../db/resistance");


///create the body for cardio
router.post("/api/cordio", ({ body }, res) => {
    Cardio.create(body)
      .then(dbCardio => {
        res.json(dbCardio);
      })
      .catch(err => {
        res.status(400).json(err);
    });
});
// create body for left
router.post("/api/left", ({ body }, res) => {
    Left.create(body)
      .then(dbLeft => {
        res.json(dbLeft);
      })
      .catch(err => {
        res.status(400).json(err);
    });
});


// get method for cardio
router.post("/api/cardio/bulk", ({ body }, res) => {
    Cardio.insertMany(body)
      .then(dbCardio => {
        res.json(dbCardio);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

//finding data for cardio
router.post("/api/left/bulk", ({ body }, res) => {
    Left.insertMany(body)
      .then(dbLeft => {
        res.json(dbLeft);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

//finding data for left
router.get("/api/left", (req, res) => {
    Left.find({})
      .sort({ date: -1 })
      .then(dbLeft => {
        res.json(dbLeft);
      })
      .catch(err => {
        res.status(400).json(err);
    });
});


// get mathod 
router.get("/api/left", (req, res) => {
    Left.find({})
      .sort({ date: -1 })
      .then(dbLeft => {
        res.json(dbLeft);
      })
      .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;