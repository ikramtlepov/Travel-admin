import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { toggleModalAlert } from '../../store/slices/pageActionSlice';
import { CgClose } from 'react-icons/cg';

const ModalAlert = ({ children, title }) => {
    const { ref, inView } = useInView();
    const dispatch = useDispatch();

    return (
        <div
            onClick={(e) => {
                if (e.target.classList.contains("overlay")) {
                    dispatch(toggleModalAlert());  
                }
            }}
            className="overlay-y-auto fixed top-0 right-0 bottom-0 left-0  flex justify-center px-[5%] items-start bg-black bg-opacity-20 z-30 backdrop:blur-[2px]"
        >
            <div
                ref={ref}
                className={`relative ${inView ? "top-0 opacity-100" : "top-[50px] opacity-0"} duration-300 w-[500px] p-4 bg-white shadow-lg rounded-md mt-[15vh] mb-[30px]`}
            >
                <div className="flex justify-between items-center">
                    <span className="text-[18px] text-gray-800 font-semibold">{title}</span>
                    <button onClick={() => dispatch(toggleModalAlert())} className="w-[30px] h-[30px] flex justify-center  ">
                        <CgClose />
                    </button>
                </div>
                <div className="mt-4">{children}</div>
            </div>
        </div>
    );
};

export default ModalAlert;
