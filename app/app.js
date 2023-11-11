const express = require("express");
const {
  globalErrHandler,
  notFoundErr,
} = require("../middlewares/globalErrHandler");
const adminRouter = require("../routes/staff/adminRouter");

const app = express();

//Middlewares
app.use(express.json()); //pass incoming json data

//Routes

//Admin Routes
app.use("/api/v1/admins/", adminRouter);

//Error Middlewares
app.use(notFoundErr);
app.use(globalErrHandler);

module.exports = app;
