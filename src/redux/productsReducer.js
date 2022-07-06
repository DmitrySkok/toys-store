import shortid from 'shortid';

//selectors
export const getAllProducts = ({ products }) => products;
export const getProductsById = ({ products }, productId) => products.find(product => product.id === productId);
export const getProductsByCategory = ({ products }, categoryName) => products.filter(product => product.category.toLowerCase() === categoryName);

// actions
const createActionName = actionName => `app/products/${actionName}`;
const REMOVE_POST = createActionName ('REMOVE_POST');
const ADD_POST = createActionName ('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');

// action creators
export const removePost = payload => ({ type: REMOVE_POST, payload });
export const addPost = payload => ({ type: ADD_POST, payload });
export const editPost = payload => ({ type: EDIT_POST, payload });

const productsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return statePart.filter(product => (product.id !== action.payload))
    case ADD_POST:
      return [...statePart, {id: shortid(), ...action.payload}];
    case EDIT_POST:
      return statePart.map(product => (product.id === action.payload.id ? { ...product, ...action.payload } : product));
    default:
      return statePart;
  };
};

export default productsReducer;