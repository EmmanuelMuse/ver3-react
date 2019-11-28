import { combineReducers } from "redux";

const ROI = {//initial state ~ initState
    orgEmail: '',
    TBcontact: '',
    projectNum: '',
    orgName: '',
    phone: '',
    time: '',
    dollars: 0,
    cdr: 0,
    clients: 0
}

const Qs = {
    time1: "On average, how many hours are spent monthly on administrative work concerning donations?",
    time1Help:"",
    
    time2: "On average, how many hours are spent monthly conducting and planning major outreach and matching gift campaigns?",
    
    time3: "On average, how many hours are spent monthly on adminstrative work concerning grants?",
    time3Help:"This includes hours spent managing your grant pipeline, managing/reporting grant deadlines," + ""
    + "hours spent generating and communicating grant reports and hours spent on allocation.",
    
    time4: "On average, how many hours are spent monthly on tracking, reporting, and preparing tax reciepts annually?" 
}

//one state per reducer

//manages the Qs state
//quesetions will be requested from the store
const questionReducer = (state = Qs, action) =>{
    return state;
}

//manages ROI results
//results will be updated and then requested then displayed
const resultReducer = (state = ROI, action) => {
    return state;
}



const rootReducer = combineReducers({questionReducer, resultReducer});


export default rootReducer;