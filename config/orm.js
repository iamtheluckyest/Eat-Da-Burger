var connection = require("./connection.js");

var orm = {
    // Returns all the burgers in the table
    selectAll : function(cb){
        connection.query("SELECT * FROM burgers", function(err, data){
            return cb(data);
        });
    },
    // Adds a burger to the table
    insertOne : function(burgerName, cb){
        var queryStr = "INSERT INTO burgers (burger_name) VALUES ('" + burgerName + "')";
        connection.query(queryStr, function(err, data){
            return cb(data);
        });
    },
    // Updates the value of "devoured" in the burger model
    updateOne : function(condition, cb){
        connection.query("UPDATE burgers SET devoured = true WHERE ?", condition, function(err, data){
            console.log(this.sql)
            return cb(data);
        });
    }
};

module.exports = orm;