const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// app.get('/status', (req,res) => {
//     res.send({
//         message: "Hello World."
//     })
// })

// app.post('/register', (req,res) => {
//     res.send({
//         message: `Your user ${req.body.email} was registered!`
//     })
// })

sequelize.sync()
    .then(()=> {
        //app.listen(process.env.PORT || 8081)
        app.listen(config.port)
        console.log(`Server started on port ${config.port}`)
    })


