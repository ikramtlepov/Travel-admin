import React from 'react';
import { useDispatch } from 'react-redux';
import { setDeleteItemId, setModalType, toggleModalAlert } from '../../store/slices/pageActionSlice';
const DestCard = ({ item, className }) => {
    const dispatch = useDispatch();

    function handleModalDelete(id) {
        dispatch(setDeleteItemId(id));
        dispatch(setModalType("delete"));
        dispatch(toggleModalAlert());
    }

    function handleModalEdit(id) {
        dispatch(setDeleteItemId(id));
        dispatch(setModalType("update"));
        dispatch(toggleModalAlert());
    }

    return (
        <div className={`group relative p-4 rounded-xl shadow-lg bg-gradient-to-br from-blue-500 via-teal-400 to-indigo-500 `}>
            <div className="relative overflow-hidden rounded-xl group-hover:scale-105 transform transition duration-300 ease-in-out">
                <img
                    className="h-[250px] w-full object-cover rounded-xl"
                    src={item.image}
                    alt={item.name} />
            </div>

            <div className="mt-4 text-white ">
                <h2 className="text-2xl font-bold">{item.name}</h2>
                <p className="text-lg mt-1">{item.country}</p>
            </div>

            <div className="mt-4 flex gap-2">
                <button
                    onClick={() => handleModalEdit(item.id)}
                    className="px-6 py-3 text-white font-semibold bg-blue-500 rounded-lg">
                    Edit
                </button>
                <button
                    onClick={() => handleModalDelete(item.id)}
                    className="px-6 py-3 text-white font-semibold bg-red-500 rounded-lg">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default DestCard;
