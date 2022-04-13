const express = require('express')
const app = express()
const port = 3000
const emplyEoaa= require('./routes/index-two')
//import css/img/fonts
app.use(express.static('assets'))
app.use('/css',express.static(__dirname+'assets/css'))
app.use('/fonts',express.static(__dirname+'assets/fonts'))
app.use('/img',express.static(__dirname+'assets/img'))


//assigment 1


app.get('/account', (req, res) => {
    res.sendFile(__dirname+'/account.html')
})
app.get('/account-login', (req, res) => {
    res.sendFile(__dirname+'/account-login.html')
})
app.get('/account-register', (req, res) => {
    res.sendFile(__dirname+'/account-register.html')
})
app.get('/page-not-found', (req, res) => {
    res.sendFile(__dirname+'/page-not-found.html')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})

app.use("./routes/index-two",emplyEoaa );




//start
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
