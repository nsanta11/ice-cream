// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "mgs0iaapcj3p9srz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "wxoek5qmpq5px8et",
  password: "o4uade6tsobadp9v",
  database: "lri6zp5bxk0dqsyw",

});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
