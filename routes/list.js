const express = require('express')
const router = express.Router()

const users = require('./form').users

router.get('/users', (req, res) => {
    res.render('list', {pageTitle: 'Users', pathName: 'list', users: users})
})

module.exports = {router}