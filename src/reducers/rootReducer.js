import { combineReducers } from "redux";
import * as questions from './questionReducer';
//////////STATES
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
var mapT, mapM;
const results = {
    time: mapT = new Map(),
    hoursSaved: function(){
        return this.time.reduce((a,b) =>parseInt(a)+parseInt(b),0);
    },
    money: mapM = new Map(),
    dollarsSaved:0,
    expenses: 0,
    revenue: 0,
    cdr: function(){return this.expenses/this.revenue},
    clients: 0
}
////////REDUCERS//one state per reducer

//manages ROI results
//results will be updated and then requested then displayed
const resultReducer = (state = results, action) => {
    //actions to handle math 
    switch(action.type){
        case 'ADD_Time':
            return{ ...state, time: mapT.set(action.payload, action.id) }
        case 'ADD_Money':
            return{...state, money: mapM.set(action.payload, action.id) }
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
    //add other reducers when completed
    FM: questions.FMQuestions,
    PM: questions.PMQuestions,
    GM: questions.GMQuestions,
    resultValues:resultReducer, 
    userInfo:infoReducer
});


export default rootReducer;