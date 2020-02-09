const express = require('express')
const next = require('next')
const compression = require('compression')
const getAuthAPI = require('./apis/authApi')

const port = parseInt(process.env.PORT, 10) || 8080
const dev = process.env.NODE_ENV !== 'production'
const host = process.env.HOST || '0.0.0.0'

const app = next({ dev })
const handle = app.getRequestHandler()

const authApi = getAuthAPI()
app
  .prepare()
  .then(() => {
    const server = express()
    server.use(express.urlencoded({ extended: true }))
    server.use(express.json())
    server.use(compression())

    server.post('/admin/login', (req, res) => authApi.login(req, res))

    server.get('/health', (req, res) => res.status(200).send('OK'))
    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, host, err => {
      if (err) throw err
      console.log(`Ready on port: ${port}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
