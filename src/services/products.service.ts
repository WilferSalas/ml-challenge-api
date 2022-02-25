/* eslint-disable camelcase */
// @packages
import axios from 'axios'

interface Product {
  id: string;
  title: string;
  currency_id: string;
  price: {
    currency: string,
    amount: number,
    decimals: number,
  };
  thumbnail: string;
  condition: string;
  shipping: {
    free_shipping: boolean
  };
}

class ProductsService {
  products: Product[];
  constructor () {
    this.products = []
  };

  async find (serachTerm: any) {
    const response = await axios(`https://api.mercadolibre.com/sites/MLA/search?q=${serachTerm}`)
      .then(res => res.data)
      .catch(err => console.log(err))

    const categories = response?.filters.find((filter: any) => filter.id === 'category')?.values[0]
      .path_from_root.map((path: any) => path.name)

    const products = {
      author: {
        name: 'Wilfer',
        lastname: 'Salas'
      },
      categories,
      items: response.results.map((product: Product) => {
        return {
          id: product?.id,
          title: product?.title,
          price: {
            currency: product?.currency_id,
            amount: product?.price,
            decimals: product?.price
          },
          picture: product?.thumbnail,
          condition: product.condition,
          free_shipping: product?.shipping?.free_shipping
        }
      }).slice(0, 4)
    }

    return products
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
