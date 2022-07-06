const initialState = {
  products: [
    {
      id: '1',
      name: 'Teddy Bear',
      price: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor eros erat, sed euismod nisl dictum at. Nullam lacinia, tortor at ultricies ultricies, lectus odio semper nunc, eget ultrices arcu erat ut purus.',
      sale: 20,
      category: 'toys',
      age: 3,
      availability: true,
    },
    {
      id: '2',
      name: 'Nike air kids',
      price: 750,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor eros erat, sed euismod nisl dictum at. Nullam lacinia, tortor at ultricies ultricies, lectus odio semper nunc, eget ultrices arcu erat ut purus.',
      sale: 10,
      category: 'shoes',
      age: 10,
      availability: true,
      size: 15,
    },
    {
      id: '3',
      name: 'Lamb',
      price: 80,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor eros erat, sed euismod nisl dictum at. Nullam lacinia, tortor at ultricies ultricies, lectus odio semper nunc, eget ultrices arcu erat ut purus.',
      sale: null,
      category: 'toys',
      age: 3,
      availability: true,
    },
    {
      id: '4',
      name: 'Jacket',
      price: 400,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor eros erat, sed euismod nisl dictum at. Nullam lacinia, tortor at ultricies ultricies, lectus odio semper nunc, eget ultrices arcu erat ut purus.',
      sale: null,
      category: 'wear',
      age: 10,
      availability: true,
      size: 120,
    },
    {
      id: '5',
      name: 'The story of Joe Biden',
      price: 29,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor eros erat, sed euismod nisl dictum at. Nullam lacinia, tortor at ultricies ultricies, lectus odio semper nunc, eget ultrices arcu erat ut purus.',
      sale: null,
      category: 'books',
      age: 4,
      availability: true,
    },
    {
      id: '6',
      name: 'NYC christmas 1000 piece puzzle',
      price: 34.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor eros erat, sed euismod nisl dictum at. Nullam lacinia, tortor at ultricies ultricies, lectus odio semper nunc, eget ultrices arcu erat ut purus.',
      sale: 5,
      category: 'puzzles',
      age: 13,
      availability: true,
    }
  ],
  categories: ['puzzles', 'books', 'wear', 'toys', 'shoes']
}

export default initialState;