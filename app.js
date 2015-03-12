var mongojs = require('mongojs');
var express = require('express');

var uri = "mongodb://localhost/recipes",
    db = mongojs.connect(uri);
var app = express();

app.get('/', function (req,res) {
   res.sendfile('./addrecipe.html')
});

app.post('/addrecipe', function (req,res) {
   
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

});


// Get our form values. These rely on the "name" attributes
// var recipeTitle = req.body.recipetitle;
// var description = req.body.recdescription;
// var time = req.body.cooktime;
// var servings = req.body.servings;

// Getting value from drop-down form
// var selected_course = oForm.elements["course"].selectedIndex;

// 	if(selected_course > 0)
// 	{
// 	   var selected_option_value = oForm.elements["course"].options[selected_course].value;
// 	   var selected_option_text = oForm.elements["course"].options[selected_course].text;
// 	}
// 	else
// 	{
// 	   alert('Please select a course from the drop down list');
// 	};

//     // Set our collection
//     var collection = db.get('mongodb://localhost/recipes');

//     // Submit to the DB
//     collection.insert({
//         "title" : recipeTitle,
//         "course" : selected_course,
//         "description" : description,
//         "time" : time,
//         "servings" : servings
//     }, function (err, doc) {
//         if (err) {
//             // If it failed, return error
//             res.send("There was a problem adding the information to the database.");
//         }
//         else {
//             // If it worked, set the header so the address bar doesn't still say /adduser
//             res.location("mongodb://localhost/recipes");
//             // And forward to success page
//             res.redirect("index.html");
//         }
//     });
// });

// var recipeProvider = new RecipeProvider('localhost', 27017);

// app.post('/recipes', function(req, res){
//     recipeProvider.save({
//         title: req.param('recipetitle'),
//         course: req.param('selected_course'),
//         description: req.param('recdescription'),
//         time:  req.param('cooktime'),
//         servings: req.param('servings')
//     }, function(error, docs) {
//             res.redirect('/')
//     });
// });