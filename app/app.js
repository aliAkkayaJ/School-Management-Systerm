const express = require("express");
const {
  globalErrHandler,
  notFoundErr,
} = require("../middlewares/globalErrHandler");
const adminRouter = require("../routes/staff/adminRouter");
const academicYearRouter = require("../routes/academics/academicYear");
const academicTermRouter = require("../routes/academics/academicTerm");
const app = express();

//Middlewares
app.use(express.json()); //pass incoming json data

//Routes
app.use("/api/v1/admins/", adminRouter);
app.use("/api/v1/academic-years/", academicYearRouter);
app.use("/api/v1/academic-terms/", academicTermRouter);

//Error Middlewares
app.use(notFoundErr);
app.use(globalErrHandler);

module.exports = app;
