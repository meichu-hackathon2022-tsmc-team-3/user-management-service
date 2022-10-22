const createError = require("http-errors");
const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

// MongoDB
const connectDB = require("./db/connection");

setTimeout(async () => {
    await connectDB();
    
    if (process.env.ENV == 'DEV'){
        const initDB = require("./db/init");
        initDB();
    }
}, 0)

// Middlewares
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// Set up CORS option
const corsOption = {
    origin: process.env.CLIENT,
};

app.use(cors(corsOption));

// Routings
app.use("/api/v1/health", require("./routes/health.route"));
app.use("/api/v1/user", require("./routes/user.route"));
app.use("/api/v1/department", require("./routes/department.route"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {

    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = process.env.ENV === "dev" ? err : {detail: "something is wrong with the server"};

    // render the error page
    res.status(err.status || 500);
    // res.render('error');
    res.json({
        error: err,
    });
});


module.exports = app;
