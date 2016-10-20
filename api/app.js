var express = require('express');
var app = express();

app.get('/hello', function (req, res) {
  res.send('Hello Azure!');
});

app.get('/contacts', function (req, res) {
	
  var contacts = [
		   {
		     "id":1,
		     "name":"Barney Poland",
		     "email":"barney@contoso.com"
		   },
		   {
	             "id":2,
		     "name":"Lacy Barrera",
		     "email":"lacy@contoso.com"
		  },
		  {
	            "id":3,
		    "name":"Lora Riggs",
		    "email":"lora@contoso.com"
		  }
	        ];	
  
  res.json(contacts);

});

app.listen(process.env.PORT || 3000);
