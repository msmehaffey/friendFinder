var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT)
});