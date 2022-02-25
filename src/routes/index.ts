// @packages
const express = require('express')

// @scripts
const products = require('./products.routes')

const router = express.Router()

const routerApi = (app: express.Application) => {
  app.use('/api', router)

  router.use('/items', products)
}

module.exports = routerApi
