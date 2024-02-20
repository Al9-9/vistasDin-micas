const express = require('express')
const app = express()
const path = require('path')
const port = 3030;

// CONFIG
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'./views'))


//MIDDLEWARE
app.use(express.static('public'))

//ROUTES
const indRoutes = require('./routes/other.routes')



//ROUTERS
 app.use('/', indRoutes)










// PUERTO
app.listen(port, () => console.log(`http://localhost:${port}`))