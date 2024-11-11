import { useDispatch, useSelector } from 'react-redux';
import { deleteDestData } from '../api/request';
import DestCard from '../components/page-components/DestCard';
import ModalAlert from '../components/page-components/ModalAlert';
import { toggleModalAlert } from '../store/slices/pageActionSlice';
import CreateDestination from './CreateDestination';
import Loading from '../components/page-components/Loading';

const Destination = () => {
    const { destinations, isDestLoad } = useSelector(state => state?.destinationSlice);
    const { showModalAlert, deleteItemId, modalType } = useSelector(state => state.pageActionSlice)
    const dispatch = useDispatch();
    const baseUrl = "https://travel-data-p3vn.onrender.com";
    console.log(destinations)

    return (
        <div>
            {isDestLoad ?
                <div>
                    <Loading />
                </div>
                :
                <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-[10px]">
                    {destinations?.map((item, index) => (
                        <DestCard
                            item={item}
                            key={item.id}
                            index={index}
                            className={`animate-fadeInUp delay-${index * 150}ms`}
                        />
                    ))}
                </div>
            }

            {showModalAlert && (
                <ModalAlert title={modalType === "update" ? "Update Destination" : "Delete Destination"}>
                    {modalType === "update" ? (
                        <div>
                            <CreateDestination baseData={destinations.find(destItem => destItem.id === deleteItemId)} />
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
}


export default Destination;
