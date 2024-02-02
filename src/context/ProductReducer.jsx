const productReducer = (state, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case "ADD_PRODUCT": {
        return {
          ...state,
          products: [...state.products, payload],
        };
      }
  
      case "One": {
        return {
          ...state,
          counter: state.counter + 1,
        };
      }
  
      case "Two": {
        return {
          ...state,
          counter: state.counter + 2,
        };
      }
  
      case "Three": {
        return {
          ...state,
          counter: state.counter + 3,
        };
      }
  
      case "CART_ADD": {
        // Check if the product is already in the cart
        const existingProduct = state.cart.find((item) => item.id === payload.id);
  
        if (existingProduct) {
          return state; // If exists, do not add again
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...payload }],
          };
        }
      }
  
      default:
        return state;
    }
  };
  
  export default productReducer;
  