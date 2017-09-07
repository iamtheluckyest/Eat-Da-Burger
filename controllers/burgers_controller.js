var express = require ('express');
var router = express.Router();
var burger = require('../models/burger.js');


// Gets and displays all burgers using handlebars views
router.get('/', function(req, res){
    burger.all(function(data) {
        res.render("index", {burgers : data});
    });
});

// Adds a burger to the table, then refreshes the page (which GETs the updated table)
router.post('/', function(req, res){
    var burgerName = req.body.name;
    burger.add(burgerName, function(data){
        res.redirect("/");
    })
});

// Updates the "devoured" status of the burger, then refreshes the page
router.put('/:id', function(req, res){
    var condition = {
        id : req.params.id
    };  

    burger.devour(condition, function() {
        res.redirect("/");
    });
});

module.exports = router;
    