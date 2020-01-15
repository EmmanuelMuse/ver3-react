import { combineReducers } from "redux";
import * as questions from './questionReducer';
//////////STATES
const user = {//initial state ~ initState
   ROI:{
    orgName: '',
    orgAddress:'',
    projectType: '',
    contactName: '',
    contactEmail: '',
    contactPhone: ''
   }
}

var mapT, mapM;
const results = {
    time: mapT = new Map(),
    hoursSaved: function(){
        var hours = 0;
        this.time.forEach(function(values){
            values*=12;//monthy => annual
            hours += values;
        })
        return hours;
    },
    money: mapM = new Map(),
    dollarsSaved:function(){
        var dollars = 0
        this.money.forEach(function(value){
            switch(value){
                case 1:
                    value = 20000;
                    break;
                case 2:
                    value = 45000;
                    break;
                case 3:
                    value = 75000;
                    break;
                case 4:
                    value = 150000;
                    break;
                case 5:
                    value = 375000;
                    break;
                default:
            }
            dollars += value;
        })
        return dollars;
    },
    expenses: 0,
    revenue: 0,
    cpdr: function(){return (parseFloat((this.expenses/this.revenue).toFixed(2)))},
    clients: 0,
    budget: 0,
    clientsServed: function(){return (Math.round(this.budget/this.clients))}
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
        case 'ADD_Budget':
            return{...state, budget: action.payload}
        case 'ADD_UniqueClients':
            return{...state, clients: action.payload}
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
            return { ...state, contactName: action.payload}

        case 'ADD_OrgName':
            return   { ...state, orgName: action.payload}

        case 'ADD_ProjType':
            return { ...state, projectType: action.payload}   

        case 'ADD_Address':
            return { ...state, orgAddress:action.payload}

        case 'ADD_Email':
                //debugging lines
                // console.log(user)
                // console.log(state)
            return { ...state, contactEmail:action.payload}
        case 'ADD_Phone':
                // console.log(user) - see if state is updated
                console.log(state)
            return { ...state, contactPhone:action.payload}
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