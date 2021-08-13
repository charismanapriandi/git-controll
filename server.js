require('dotenv').config()
const express = require('express')

const app = express()

const port = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send('hallo from git.charisman-afriandi.com ' + process.env.TEXT)
})

app.listen(port, () => console.log('> server running '))