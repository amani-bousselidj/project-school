import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case 'REMOVE_FROM_CART':
      const updatedCart = state.cartItems.filter((item) => item.title !== action.payload.title);
      return { ...state, cartItems: updatedCart };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  const toggleCourseInCart = (course) => {
    if (isCourseInCart(course)) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: course });
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: { ...course, quantity: 1 } });
    }
  };

  const isCourseInCart = (course) => {
    return state.cartItems.some((item) => item.title === course.title);
  };

  return (
    <CartContext.Provider value={{ state, toggleCourseInCart, isCourseInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
