import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TourCard from '../components/page-components/TourCard';

const Tours = () => {
    const { tours, isTourLoad } = useSelector(state => state.tourSlice);
    const dispatch = useDispatch();
    const { showModalAlert, deleteItemId, modalType } = useSelector(state => state.pageActionSlice)
    const baseUrl = "https://travel-data-p3vn.onrender.com";
    console.log(tours)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {isTourLoad ? (
                <div className='grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-[10px]'>
                    {[...Array(10)].map((_, i) => (
                        <div
                            key={i}
                            className='rounded-md shadow-md border-[1px] h-[350px] w-[350px] animate-pulse bg-gray-300'
                        />
                    ))}
                </div>
            ) : (
                <div className="mt-3">
                    <div className='grid justify-center grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-[10px]'>
                        {tours.map(item => (
                            <TourCard item={item} key={item.id} />
                        ))}
                    </div>
                </div>
            )}



            {showModalAlert && (
                <ModalAlert title={modalType === "update" ? "Update Destination" : "Delete Destination"}>
                    {modalType === "update" ? (
                        <div>
                            <CreateTour baseData={tours.find(tourItem => tourItem.id === deleteItemId)} />
                        </div>
                    ) : (
                        <div className='flex flex-col gap-3'>
                            <p className='mt-[10px] flex justify-start items-center gap-2'>Are you sure you want to delete this item?</p>
                            <div className='flex justify-end gap-3'>
                                <button onClick={() => dispatch(toggleModalAlert())} className='py-[5px] px-[15px] rounded-md'>
                                    Cancel
                                </button>
                                <button onClick={() => dispatch(deleteDestData(baseUrl, deleteItemId))} className='py-[5px] px-[15px]'>
                                    Confirm Delete
                                </button>
                            </div>
                        </div>
                    )}
                </ModalAlert>
            )}
        </div>
    );
};

export default Tours;
