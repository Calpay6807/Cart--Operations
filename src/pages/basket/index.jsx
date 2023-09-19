import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToBasket } from "../../redux/action";

const Basket = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const data = state.bookReducer.cart;

  // Sepetteki tüm ürünlerin fiyatlarını toplamak için reduce kullanımı
  const totalItems = data.length;
  const totalPrice = data.reduce((total, item) => total + item.price, 0);

  const handleDeleteAll = () => {
    // Tüm ürünleri sepetten kaldırma işlemi
    data.forEach((item) => {
      dispatch(deleteToBasket(item.id));
    });
  };

  return (
    <>
      <p className="m-4 w-[200px] bg-green-500 text-white rounded text-center text-xl">
        Toplam ürün: {totalItems}
      </p>
      <p className="m-4 h-[30px] w-[200px] text-white text-xl text-center rounded cursor-pointer  bg-red-500">
        Toplam Fiyat: {totalPrice} tl
      </p>
      <button
        onClick={handleDeleteAll}
        className="bg-blue-500 w-[200px] m-4 text-white text-xl rounded "
      >
        Hepsini Sil
      </button>
      <div className="flex justify-center  flex-wrap mt-[100px]">
        {data.map((item) => (
          <div
            key={item.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5"
          >
            <a href="#">
              <img
                className="rounded-t-lg  w-[250px] h-[200px] "
                src={item.images}
                altitem
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
                onClick={() => dispatch(deleteToBasket(item.id))}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Sepetten Sil
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
    </>
  );
};

export default Basket;
