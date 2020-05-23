const fs = require('fs')

const express = require('express')

const app = express()


app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // 将json数据转为对象，然后再渲染
    getDataObj(resp => {
        res.render('new', resp)
    })
})

function getDataObj(callback){
    // 异步模块，用回调处理
    fs.readFile('./datajson.json', (err, data) => {
        if(!err){
            callback(JSON.parse(data))
        }
        else throw err
    })
}

app.listen(8087, () => {
    console.log('8087')
})