const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); // because our module (which is the date.js) is local, and is not installed using npm, we have to use __dirname (current directory)

const app = express();

const items = ["Go grocery shopping", "Work out", "Do laundry"];
const workItems = [];

//using ejs with express
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res){ 
    let day = date.getDate(); //calls the function that is bound to the constant date then activates the getDate function
    res.render("list", {listTitle: day, newListItems:items});

});

app.post("/", function(req, res){

    let item = req.body.newItem;

    if (req.body.list === "Work"){ //if the list that the new item came from the work list, 
        workItems.push(item); //that item will then be added to the work items array 
        res.redirect("/work"); //then it will redirect to the work route which is: app.get("/work") where it will render the work list from the work items
    } else {
        items.push(item);
        res.redirect("/");
    }  

});
app.get("/work", function (req, res){ //creates a new route. in this case, it creates a new page for the "work" page
    res.render("list", {listTitle: "Work List", newListItems: workItems}); //"list" will render the new Work List page
});

app.post("/deleteItem", function(req, res){
    let item = req.body.button;
    items.splice(items.indexOf(item), 1);
    
    res.redirect("/");
})


app.listen(3000,function(req, res){
	console.log("Server started on port 3000");
});
