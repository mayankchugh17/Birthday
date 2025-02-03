const express = require("express");
const app = express();
const port = 8080;

app.listen(port, (err) => {
    if (err) {
        console.error("Failed to start server:", err);
        return;
    }
    console.log(`Server started on Port: ${port}`);
});

app.set("view engine", "ejs");
//app.set("views",path.join(__dirname,"views"));

app.get("/birthday",(req,res)=>{
  res.render("bday.ejs")
})

app.get("/birthday/special",(req,res)=>{
  res.render("special.ejs");
})