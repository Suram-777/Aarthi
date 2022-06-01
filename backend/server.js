const exp = require('express')
const app = exp()

//connecting front end with backend
const path = require('path')
app.use(exp.static(path.join(__dirname, '../build')))

//routes



//dealing with page refresh
app.use('*',(req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'))
})


app.get('/contactus', (req, res)=>{
    console.log(req.url);
})


app.listen(4000, ()=>{
    console.log('server on 4000');
})