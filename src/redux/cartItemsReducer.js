//selectors
export const getAllCartItems = ({ cartItems }) => cartItems;

// actions
// const createActionName = actionName => `app/categories/${actionName}`;


// action creators
const cartItemsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default cartItemsReducer;