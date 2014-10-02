var app = require('express')();

app.all('*', function (req, res) {
  console.log('Sending a 503');
  res.status(503).send('Service Unavailable\n');
});

app.listen(5003, function () {
  console.log('Listening on port 5003');
});

