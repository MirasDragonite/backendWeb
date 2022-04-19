const  express= require('express')
const bodyparser= require('body-parser')
const https=require('https')
const {response} = require("express");
const app=express()

const port=4000
//import css/img/fonts/js
app.use(express.static('assets'))
app.use(bodyparser.urlencoded({extended:true}))


app.use('/fonts',express.static(__dirname+'assets/fonts'))
app.use('/img',express.static(__dirname+'assets/img'))
app.use('/js',express.static(__dirname+'assets/js'))
app.use('/scss',express.static(__dirname+'assets/scss'))
app.use('/css',express.static(__dirname+'assets/css'))

///routs
app.use('/about-us', require('./routes/about-us'))
app.use('/account', require('./routes/account'))
app.use('/account-login', require('./routes/account-login'))
app.use('/account-register', require('./routes/account-register'))
app.use('/blog', require('./routes/blog'))

app.use('/blog-details-left-sidebar', require('./routes/blog-details-left-sidebar'))
app.use('/blog-details-no-sidebar', require('./routes/blog-details-no-sidebar'))
app.use('/contact', require('./routes/contact'))
app.use('/page-not-found', require('./routes/page-not-found'))
app.use('/shop', require('./routes/shop'))
app.use('/shop-cart', require('./routes/shop-cart'))
app.use('/shop-checkout', require('./routes/shop-checkout'))
app.use('/shop-compare', require('./routes/shop-compare'))
app.use('/shop-four-columns', require('./routes/shop-four-columns'))
app.use('/shop-three-columns', require('./routes/shop-three-columns'))
app.use('/shop-right-sidebar', require('./routes/shop-right-sidebar'))
app.use('/index-two', require('./routes/index-two'))
app.use('/index', require('./routes/index'))
app.use('/shop-wishlist', require('./routes/shop-wishlist'))
app.use('/single-affiliate-product', require('./routes/single-affiliate-product'))
app.use('/single-group-product', require('./routes/single-group-product'))
app.use('/single-normal-product', require('./routes/single-normal-product'))
app.use('/single-product', require('./routes/single-product'))
app.use('/weather', require('./routes/weather'))


app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})


app.post('/',((req, res) =>{
    let cityname=req.body.city
    let key="d134b1b82ccbb2a01099550a3393edb5"
    let url="https://api.openweathermap.org/data/2.5/weather?q=" +cityname + "&appid=" + key + "&units=metric&mode=json"
    https.get(url,function (response){
        response.on( 'data',data=>{
            // console.log(data)
            let a= JSON.parse(data)
            let temp= a.main.temp
            let cond= a.weather[0].description
            res.send("Weather in city:"+ cityname + "  "+cond+"  "+temp)
        })

    })

} ))


//start
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
