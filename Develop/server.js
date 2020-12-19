const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
//app.use(require("./routes/route")); 
require("./routes/route")(app);
require("./routes/htmlRoutes")(app);
//app.use(require("./routes/htmlRoutes"));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});