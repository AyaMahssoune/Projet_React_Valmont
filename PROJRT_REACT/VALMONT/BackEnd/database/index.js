const mongoose = require("mongoose");

mongoose
  .connect("mongodb://theUser:motdepasse@127.0.0.1:27017/prjValmont")
  .then(() => console.log("Connection etablie!"))
  .catch((e) => console.log(e));
