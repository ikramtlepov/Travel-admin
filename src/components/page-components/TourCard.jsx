import React from 'react';
import { useDispatch } from 'react-redux';
import { setModalType, toggleModalAlert } from '../../store/slices/pageActionSlice'; // Import actions

const TourCard = ({ item, index }) => {
  const dispatch = useDispatch();

  function handleModalDelete(id) {
    dispatch(setSelectItem(id));
    dispatch(setModalType("delete"));
    dispatch(toggleModalAlert());
  }

  function handleModalEdit(id) {
    dispatch(setSelectItem(id));
    dispatch(setModalType("update"));
    dispatch(toggleModalAlert());
  }

  return (
    <div className={`group relative p-4 rounded-xl shadow-lg bg-gradient-to-br from-blue-500 via-teal-400 to-indigo-500 `}>
      <div className="relative overflow-hidden rounded-xl group-hover:scale-105 transform transition duration-300 ease-in-out">
        <img
          className="h-[250px] w-full object-cover rounded-xl"
          src={item.images}
          alt={item.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
      </div>

    


      <div className="mt-2 font-semibold pt-2">
      <h2 className="text-lg font-semibold">{item.title}</h2>
        Price: <span className="text-orange-400">${item.price}</span>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => handleModalEdit(item.id)}
          className="px-6 py-3 text-white font-semibold bg-blue-500 rounded-lg"
        >
          Edit
        </button>
        <button
          onClick={() => handleModalDelete(item.id)}
          className="px-6 py-3 text-white font-semibold bg-red-500 rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TourCard;