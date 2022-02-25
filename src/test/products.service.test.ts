/* eslint-disable no-undef */
// @scripts
import ProductsService from '../services/products.service'

describe('Get ipad results', () => {
  test('it should return a list of products', async () => {
    const service = new ProductsService()
    const response = await service.find('ipad')

    expect(response.items).toHaveLength(4)
  })
})
