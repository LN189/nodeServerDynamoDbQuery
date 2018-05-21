const read = require('./app/read')
const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const port = 8080

const app = express()

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

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
