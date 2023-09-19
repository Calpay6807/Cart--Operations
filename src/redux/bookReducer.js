import { books } from "../../data";
import { addToFavorite } from "./action";

const INITILA_STATE = {
  bookİtem: books,
  cart: [],
  favoriteCart: [],
};

export const bookReducer = (state = INITILA_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, cart: [...state.cart, action.payload] };

    case "DELETE_TO_BASKET":
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, cart: updatedCart };

    case "ADD_TO_FAVORİTE":
      const bookToAdd = state.bookİtem.find(
        (book) => book.id === action.payload
      );
      if (bookToAdd) {
        return {
          ...state,
          favoriteCart: [...state.favoriteCart, bookToAdd],
        };
      }
      return state;

    case "DELETE_FROM_FAVORITE":
      const updatedFavoriteCart = state.favoriteCart.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        favoriteCart: updatedFavoriteCart,
      };

    default:
      return state;
  }
};
