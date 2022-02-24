// @packages
import axios from 'axios'

class ProductsService {
  products: unknown[];
  constructor () {
    this.products = []
  };

  find (serachTerm: string) {
    return []
  };

  async findOne (id: string) {
    const response = await axios(`https://api.mercadolibre.com/items/${id}`)
      .then(res => res.data)
      .catch(err => console.log(err))

    const description = await axios(`https://api.mercadolibre.com/items/${id}/description`)
      .then(res => res.data)
      .catch(err => console.log(err))

    const product = {
      author: {
        name: 'Wilfer',
        lastname: 'Salas'
      },
      item: {
        id: response?.id,
        title: response?.title,
        price: {
          currency: response?.currency_id,
          amount: response?.price,
          decimals: response?.price
        },
        picture: response?.pictures[0]?.url,
        condition: response?.condition,
        free_shipping: response?.shipping?.free_shipping,
        sold_quantity: response?.sold_quantity,
        description: description.plain_text
      }
    }

    return product
  }
};

export default ProductsService
