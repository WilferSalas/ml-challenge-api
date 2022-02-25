// @packages
const express = require('express')

// @scripts
const ProductsService = require('../services/products.service')

const router = express.Router()
const service = new ProductsService()

router.get('/', async (req: any, res: any) => {
  const { query: { q } } = req

  const products = await service.find(q)

  if (products) return res.status(201).json(products)

  return res.status(404).send('Error getting products')
})

router.get('/:id', async (req: any, res: any) => {
  const { params: { id } } = req

  const product = await service.findOne(id)

  if (product) return res.status(200).json(product)

  return res.status(404).send('Product not found')
})

module.exports = router
