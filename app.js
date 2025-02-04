
const express = require("express");
const app = express();

// Use the PORT environment variable, or default to 8080 if it's not set
const port = process.env.PORT || 8080;

app.listen(port, (err) => {
    if (err) {
        console.error("Failed to start server:", err);
        return;
    }
    console.log(`Server started on Port: ${port}`);
});

app.set("view engine", "ejs");
//app.set("views",path.join(__dirname,"views"));

app.get("/",(req,res)=>{
  res.render("bday.ejs")
})

app.get("/special",(req,res)=>{
  res.render("special.ejs");
})
