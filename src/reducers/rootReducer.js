import { combineReducers } from "redux";
// import * as action from '../actions/rootActions';


// console.log(action.updateContact.type);
const user = {//initial state ~ initState
   ROI:{
    email: '',
    contact: '',
    projectType: '',
    orgName: '',
    phone: '',
    address:''
   }
}

const results = {
    time: 0,
    money: 0,
    expenses: 0,
    revenue: 0,
    cdr: function(){return this.expenses/this.revenue},
    clients: 0
}

// Fundraising Management Questions
const FMQs = {
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
const questionReducer = (state = FMQs, action) =>{
    return state;
}

//manages ROI results
//results will be updated and then requested then displayed
const resultReducer = (state = results, action) => {
    //actions to handle math 
    switch(action.type){
        case 'ADD_Time':
            return{ ...state, time: action.payload + state.time }
        case 'ADD_Money':
            return{...state, money: action.payload + state.money }
        case 'ADD_Expenses':
            return{...state, expenses: action.payload}
        case 'ADD_Revenue':
            return{...state, revenue: action.payload}
        default:
            return state;
    }

}

//responds to Info componenet
const infoReducer = (state = user.ROI, action) => {
//debugging line - see if actions dispatch to reducer
//    console.log(action) 
   switch(action.type){
        case 'ADD_Contact':
            return { ...state, contact: action.payload}

        case 'ADD_OrgName':
            return   { ...state, orgName: action.payload}

        case 'ADD_ProjType':
            return { ...state, projectType: action.payload}

      

        case 'ADD_Address':
            return { ...state, address:action.payload}

        case 'ADD_Email':
                //debugging lines
                // console.log(user)
                // console.log(state)
            return { ...state, email:action.payload}
        case 'ADD_Phone':
                // console.log(user) - see if state is updated
                console.log(state)
            return { ...state, phone:action.payload}
        default:
            return state;
   }
}



const rootReducer = combineReducers({
    quesitons:questionReducer, 
    resultValues:resultReducer, 
    userInfo:infoReducer
});


export default rootReducer;