import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, addToFavorite } from "../../redux/action";

const CardBook = () => {
  const state = useSelector((state) => state.bookReducer);
  console.log(state);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between  flex-wrap mt-[100px] ">
      {state.bookİtem.map((book) => (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
          <a href="#">
            <img
              className="rounded-t-lg  w-[250px] h-[200px] "
              src={book.images}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {book.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Fiyat: {book.price}
            </p>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Tarih {book.created_at}
            </p>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Açıklama: {book.description}
            </p>
            <button
              onClick={() => dispatch(addToFavorite(book.id))}
              className="inline-flex items-center px-3 py-2 mr-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Favorilere ekle
            </button>
            <button
              onClick={() => dispatch(addToBasket(book))}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sepete Ekle
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardBook;
