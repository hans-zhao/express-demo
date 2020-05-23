const express = require('express')

const app = express()

app.set('views', './views')

app.set('view engine', 'ejs')

app.get('/ejs*', (req, res) => {
    res.render('index', {'title': 'test沙发上 '})
})

app.listen('8085', () => {
    console.log('8085')
})