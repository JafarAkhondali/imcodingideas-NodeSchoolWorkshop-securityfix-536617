const
  express = require('express'),
  locus = require('locus'),
  bodyParser = require('body-parser'),
  app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// index page
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', (req, res) => {
  eval(locus);
});

app.listen(1337, () => {
  console.log('App listening on port 1337!')
});