const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

const formRoute = require('./routes/form').router
const listRoute = require('./routes/list').router

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser({extended: false}))
app.use(formRoute)
app.use(listRoute)

app.listen(3000)