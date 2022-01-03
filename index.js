const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json([
    { name: 'ilker', email: 'ilker@hotmail.com' },
    { name: 'user1', email: 'user1@hotmail.com' },
    { name: 'user2', email: 'user2@hotmail.com' },
    { name: 'user3', email: 'user3@hotmail.com' }
  ])
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
