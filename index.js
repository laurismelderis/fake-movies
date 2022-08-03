const express = require('express')
const cors = require('cors')
const movies = require('./fakeMovies')
const app = express()

const PORT = 3000 || 3900

app.use(
    cors({
        origin: `http://localhost:${PORT}`
    })
)

app.get('/api/movies', (req, res) => {
    res.send(movies)
})

app.listen(PORT, 'localhost', () => {
    console.info(`Listening on port ${PORT} ...`)
})