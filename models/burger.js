var orm = require ("../config/orm.js")

var burger = {
    // Get all burgers
    all: function(cb) {
        orm.selectAll(function(res) {
          cb(res);
        });
    },
    // Adds a burger to the table
    add: function(burgerName, cb) {
        orm.insertOne(burgerName, function(res) {
            cb(res);
        });
    },
    // Deletes a burger from the table
    devour: function(condition, cb) {
        orm.updateOne(condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;