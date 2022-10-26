const express = require('express')
const router = express.Router()

let users = [];

router.get('/', (req, res) => {
    res.render('form', {pageTitle: 'Form', pathName: 'form'})
})

router.post('/form-data', (req, res) => {
    users.push(req.body)
    console.log(users)
    res.redirect(302, '/')
})

module.exports = {router, users}