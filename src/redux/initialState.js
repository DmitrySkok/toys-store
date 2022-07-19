const initialState = {
  products: [
    {
      id: '1',
      name: 'Teddy Bear',
      price: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor eros erat, sed euismod nisl dictum at. Nullam lacinia, tortor at ultricies ultricies, lectus odio semper nunc, eget ultrices arcu erat ut purus.',
      discount: 20,
      category: 'toys',
      age: 3,
      availability: true,
      image: 'https://cdn.pixabay.com/photo/2019/10/07/09/01/toy-4532170_960_720.jpg',
    },
    {
      id: '2',
      name: 'Nike air kids',
      price: 750,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor eros erat, sed euismod nisl dictum at. Nullam lacinia, tortor at ultricies ultricies, lectus odio semper nunc, eget ultrices arcu erat ut purus.',
      discount: 10,
      category: 'shoes',
      age: 10,
      availability: true,
      image: 'https://images.pexels.com/photos/5117638/pexels-photo-5117638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      size: 15,
    },
    {
      id: '3',
      name: 'Sheep',
      price: 80,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor eros erat, sed euismod nisl dictum at. Nullam lacinia, tortor at ultricies ultricies, lectus odio semper nunc, eget ultrices arcu erat ut purus.',
      discount: null,
      category: 'toys',
      age: 3,
      availability: true,
      image: 'https://images.pexels.com/photos/12211/pexels-photo-12211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: '4',
      name: 'Vest',
      price: 400,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor eros erat, sed euismod nisl dictum at. Nullam lacinia, tortor at ultricies ultricies, lectus odio semper nunc, eget ultrices arcu erat ut purus.',
      discount: null,
      category: 'wear',
      age: 10,
      availability: true,
      image: 'https://cdn.pixabay.com/photo/2016/11/29/13/26/attractive-1869831_960_720.jpg',
      size: 120,
    },
    {
      id: '5',
      name: 'The story of Joe Biden',
      price: 29,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor eros erat, sed euismod nisl dictum at. Nullam lacinia, tortor at ultricies ultricies, lectus odio semper nunc, eget ultrices arcu erat ut purus.',
      discount: null,
      category: 'books',
      age: 4,
      availability: true,
      image: 'https://images.pexels.com/photos/21120/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: '6',
      name: 'NYC christmas 1000 piece puzzle',
      price: 34.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor eros erat, sed euismod nisl dictum at. Nullam lacinia, tortor at ultricies ultricies, lectus odio semper nunc, eget ultrices arcu erat ut purus.',
      discount: 5,
      category: 'puzzles',
      age: 13,
      availability: false,
      image: 'https://images.pexels.com/photos/269399/pexels-photo-269399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    }
  ],

  categories: ['puzzles', 'books', 'wear', 'toys', 'shoes'],

  carouselItems: [
    {
      id: '1',
      title: 'New dinosaurs collection',
      description: 'Does your child love dinosaurs? We have the lowest prices for a collection of dinosaurs',
      image: 'https://images.pexels.com/photos/8014606/pexels-photo-8014606.jpeg?auto=compress&cs=tinysrgb&w=1980&h=800&dpr=1',
    },
    {
      id: '2',
      title: 'Cars are not just for boys!',
      description: 'One of the largest range of cars in the world',
      image: 'https://images.pexels.com/photos/10216069/pexels-photo-10216069.jpeg?auto=compress&cs=tinysrgb&w=1980&h=800&dpr=1',
    },
    {
      id: '3',
      title: 'Toys for the youngest children',
      description: 'Good Toys for Young Children by Age and Stage ',
      image: 'https://images.pexels.com/photos/3662945/pexels-photo-3662945.jpeg?auto=compress&cs=tinysrgb&w=1980&h=800&dpr=1',
    }
  ]
}

export default initialState;