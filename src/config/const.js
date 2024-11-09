import { BsFillSendPlusFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { MdAddLocationAlt, MdAirplaneTicket, MdLocationOn } from "react-icons/md";

import england from "../img/united-kingdom.png"
import russia from "../img/russia.png"
import karakalpak from "../img/karakalpakstan.png"

export const btnData = [
    {
        id : 1, path : "/", icon : MdLocationOn, title : "destination"
    },
    {
        id : 2, path : "/tours", icon : MdAirplaneTicket, title : "tours"
    },
    {
        id : 3, path : "/create-destination", icon : MdAddLocationAlt, title : "create-destination"
    },
    {
        id : 4, path : "/create-tour", icon : BsFillSendPlusFill, title : "create-tour"
    },
    {
        id : 5, path : "/users", icon : HiUsers, title : "users"
    },
]



export const langData = [
    {
        id : 1, img : england, title : "ENG"
    },
    {
        id : 2, img : russia, title : "RUS"
    },
    {
        id : 3, img : karakalpak, title : "QAR"
    }
]