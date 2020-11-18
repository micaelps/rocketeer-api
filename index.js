const express = require('express')
const app = express()
const projectRoute = require('./routes/projects')
const userRoute = require('./routes/users')
const memberRoute = require('./routes/members')
const taskRoute = require('./routes/tasks')
app.use(express.json())

app.listen(3000, () => {
  console.log('ta no ar')
})

app.use('/projects', projectRoute)
app.use('/users', userRoute)
app.use('/members', memberRoute)
app.use('/tasks', taskRoute)
