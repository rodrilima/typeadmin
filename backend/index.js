import express from 'express'

const app = express()

app.get('/', (req, res) => {
  return res.send('Funciona')
})

app.listen(3001, () => console.log('Running on port 3001!'))
