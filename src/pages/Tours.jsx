import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TourCard from '../components/page-components/TourCard';
import Loading from '../components/page-components/Loading'; // Loading component if needed

const Tours = () => {
    const { tours, isTourLoad } = useSelector(state => state.tourSlice);
    const dispatch = useDispatch();

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
        </div>
    );
};

export default Tours;
