const express = require('express')
const app = express()
const projectRoute = require('./routes/projects')
app.use(express.json())

app.listen(3000, () => {
  console.log('ta no ar')
})

app.use('/project', projectRoute)
