import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromFavorite, deleteToBasket } from "../../redux/action";

const FavoriteCard = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.bookReducer.favoriteCart);
  console.log(state);
  return (
    <div className="flex justify-center">
      <div className="flex justify-between  flex-wrap mt-[100px] ">
        {state.map((item) => (
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
            <a href="#">
              <img
                className="rounded-t-lg  w-[250px] h-[200px] "
                src={item.images}
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Fiyat: {item.price}
              </p>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Tarih {item.created_at}
              </p>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Açıklama: {item.description}
              </p>

              <button
                onClick={() => dispatch(deleteFromFavorite(item.id))}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Sepetten Sil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteCard;
