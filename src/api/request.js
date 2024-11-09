import axios from "axios";
import { fetchedDestData, fetchedDestDataErr, fetchingDestData,  } from "../store/slices/destinationSlice";
import { fetchedTourData, fetchedTourDataErr, fetchingTourData } from "../store/slices/tourSlice";
import { toggleModalAlert } from "../store/slices/pageActionSlice";


export const getAllDestData = (url) => {
    return async (dispatch) => {
        dispatch(fetchingDestData());
        try {
            const res = await axios.get(url);
            dispatch(fetchedDestData(res.data));
        } catch (err) {
            dispatch(fetchedDestDataErr(err.message));
        }
    };
};


export const getAllTourData = (url) => {
    return async (dispatch) => {
        dispatch(fetchingTourData());
        try {
            const res = await axios.get(url);
            dispatch(fetchedTourData(res.data));
        } catch (err) {
            dispatch(fetchedTourDataErr(err.message));
        }
    };
};


export const creatDestData = (url,data,resetForm, setSubmit) => {
    return async (dispatch) => {
        try {
            const res = await axios.post(url,data);
           await dispatch(getAllDestData(url));
           resetForm()
           setSubmit(false)
        } catch (err) {
            console.log(err)
        }
    };
};

export const creatTourData = (url,data,resetForm, setSubmit) => {
    return async (dispatch) => {
        try {
            const res = await axios.post(url,data);
           await dispatch(getAllTourData(url));
           resetForm()
           setSubmit(false)
        } catch (err) {
            console.log(err)
        }
    };
};


// export const getAllUserData = (url) => {
//     return async (dispatch) => {
//         dispatch(fetchingUserData());
//         try {
//             const res = await axios.get(url);
//             dispatch(fetchedUserData(res.data));
//         } catch (err) {
//             dispatch(fetchedUserDataErr(err.message));
//         }
//     };
// };


export const updateDestData = (url,data, resetForm,setSubmit,id, ) => {
    return async (dispatch) => {
        try {
            const res = await axios.put(`${url}/${id}`, data);
            await dispatch(getAllDestData(url));  
            await dispatch(toggleModalAlert()); 
             await setSubmit(false)
            resetForm()
        } catch (err) {
            console.log(err)
        }
    };
};

export const updateTourData = (url,data, resetForm,setSubmit,id, ) => {
    return async (dispatch) => {
        try {
            const res = await axios.put(`${url}/${id}`, data);
            await dispatch(getAllTourData(url));  
            await dispatch(toggleModalAlert()); 
             await setSubmit(false)
            resetForm()
        } catch (err) {
            console.log(err)
        }
    };
};


export const deleteDestData = (url, id) => {
    return async (dispatch) => {
        try {
            const res = await axios.delete(`${url}/${id}`);
            await dispatch(getAllDestData(url+"/destinations"));  
            await dispatch(getAllTourData(url+"/offers"));  
            await dispatch(toggleModalAlert());  
        } catch (err) {
            console.log(err)
            dispatch(toggleModalAlert())
        }
    };
};


export const deleteTourData = (url, id) => {
    return async (dispatch) => {
        try {
            const res = await axios.delete(`${url}/${id}`);
            await dispatch(getAllTourData(url+"/offers"));  
            await dispatch(toggleModalAlert());  
        } catch (err) {
            console.log(err)
            dispatch(toggleModalAlert())
        }
    };
};
