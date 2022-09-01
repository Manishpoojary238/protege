const express = require("express");
protegeRoutes = require('./routes/protege')

const app = express();

app.use("/", protegeRoutes);

// app.use((error, req, res, next) => {
//   console.log(error);
//   const status = error.statusCode || 500;
//   const message = error.message;
//   const data = error.data;
//   res.status(status).json({ message: message, data: data });
// });

app.listen(8080 , () =>{
  console.log('listening on port 8080')
});
