const express = require('express')
const app = express()

app.listen(3000, () => {
  console.log('ta no ar')
})
app.get('/', (req, res) => {
  res.send('OK')
})
