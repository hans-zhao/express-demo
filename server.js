const express = require('express')
const path = require('path')
const app = express()



// 请求数据本身是用文件发送的
// 请求又分为：数据请求、静态资源请求（html/js/css/图片、文件等）

// 请求静态资源，需要中间件
app.use(express.static(path.join(__dirname, 'public'))) //访问时不需要写静态资源目录（即public）
// 当然可以给静态资源也设置路由
app.use('/static', express.static(path.join(__dirname, 'static')))

// app.set('views', './views')
// app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('success')
    // res.render('index', {title: '测试'}, (err, html) => {
    // // console.log("err, html", err, html)
        
    // })
})
app.listen(8083, () => {
    console.log('server runing at "localhost:8083"')
})
