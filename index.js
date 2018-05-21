const read = require('./app/read')
const update = require('./app/update')
const create = require('./app/create')
const deleter =  require('./app/delete')
const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
var bodyParser = require('body-parser');
const port = 8080

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (request, response) => {
  response.render('home', {
    name: 'John'
  })
})

app.get('/read', (request, response) => {
  read.fetchOneByKey();
  response.render('home', {
    name: 'John'
  })
})

app.get('/update', (request, response) => {
  update.modify();
  response.render('home', {
    name: 'John'
  })
})

app.post('/createForm', (request, response) => {
  create.save(request.body.name,request.body.city,request.body.food)
  response.render('home', {
    name: 'John'
  })
})

app.get('/create', (request, response) => {
  response.render('create', {
  })
})


app.get('/delete', (request, response) => {
  deleter.remove();
  response.render('home', {
    name: 'John'
  })
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
