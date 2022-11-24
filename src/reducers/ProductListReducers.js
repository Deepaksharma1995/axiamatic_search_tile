export const initialState = {
  productData: [],
  selectedProduct: [{ id: null }, { id: null }, { id: null }, { id: null }],
};

export const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return { ...state, productData: action.data };
    case "SELECT_PRODUCT":
      return {
        ...state,
        selectedProduct: [...action.data],
      };
    case "REMOVE_PRODUCT":
      return { ...state, selectedProduct: [...action.data] };
    default:
      return { ...state };
  }
};
