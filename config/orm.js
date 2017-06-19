var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  selectALL: function(tableOne) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableOne], function(err, result) {
      console.log(result);
    });
  },
  insertOne: function(tableOne, valOne, valTwo) {
    var queryString = "INSERT INTO ?? VALUES (??,??)" ;
    console.log(queryString);
    connection.query(queryString, [tableOne,valOne,valTwo], function(err, result) {
      console.log(result);
    });
  },
   updateOne: function(tableOne,condition, valOne) {
    var queryString = "UPDATE ?? SET ?? WHERE NAME = ??";

    connection.query(queryString, [tableOne,condition, valOne ], function(err, result) {
      console.log(result);
    });
  }
};

module.exports = orm;