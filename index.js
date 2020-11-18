const express = require('express')
const app = express()
const projectRoute = require('./routes/projects')
const userRoute = require('./routes/users')
app.use(express.json())

app.listen(3000, () => {
  console.log('ta no ar')
})

app.use('/projects', projectRoute)
app.use('/users', userRoute)
