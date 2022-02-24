// @packages
import express from 'express'

// @scripts
import ProductsService from '../services/products.service'

const router = express.Router()
const service = new ProductsService()

router.get('/', async (req, res) => {
  const { query: { q } } = req

  const products = await service.find(q)

  if (products) return res.status(201).json(products)

  return res.status(404).send('Error getting products')
})

router.get('/:id', async (req, res) => {
  const { params: { id } } = req

  const product = await service.findOne(id)

  if (product) return res.status(200).json(product)

  return res.status(404).send('Product not found')
})

export default router
