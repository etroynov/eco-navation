const polka = require('polka')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 8083
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = polka()

  server.get('/sections/:slug', (req, res) => {
    const { slug } = req.params;
    app.render(req, res, '/sections', { slug })
  })

  server.get('/page/:slug', (req, res) => {
    const { slug } = req.params;
    app.render(req, res, '/page', { slug })
  })

  server.get('/courses/:slug', (req, res) => {
    const { slug } = req.params;
    app.render(req, res, '/courses', { slug })
  })

  server.get('*', (req, res) => handle(req, res))

  server
    .listen(port)
    .then(() => console.log(`> Ready on http://localhost:${port}`))
})
