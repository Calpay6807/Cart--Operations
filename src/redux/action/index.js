export const addToBasket = (book) => {
  return {
    type: "ADD_TO_BASKET",
    payload: book,
  };
};

export const addToFavorite = (id) => {
  return {
    type: "ADD_TO_FAVORİTE",
    payload: id,
  };
};

export const deleteToBasket = (id) => {
  return {
    type: "DELETE_TO_BASKET",
    payload: id,
  };
};

export const deleteFromFavorite = (id) => {
  return {
    type: "DELETE_FROM_FAVORITE",
    payload: id,
  };
};
