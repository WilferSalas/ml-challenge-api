// @packages
import express from 'express'

// @scripts
import products from './products.routes'

const router = express.Router()

const routerApi = (app: express.Application) => {
  app.use('/api', router)

  router.use('/items', products)
}

export default routerApi
