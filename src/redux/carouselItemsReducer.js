//selectors
export const getAllCarouselItems = ({ carouselItems }) => carouselItems;

// actions
// const createActionName = actionName => `app/categories/${actionName}`;


// action creators
const carouselItemsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default carouselItemsReducer;