import { combineReducers } from "redux";
// import infoReducer from './infoReducer'

var mapT, mapM;
const ROI = {
    userInfo:{
        orgName: '',
        orgAddress:'',
        projectType: '',
        contactName: '',
        contactEmail: '',
        contactPhone: ''  
    },
    results: {
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
    },
    expenses: 0,
    revenue: 0,
    cpdr: function(){return (parseFloat(((this.expenses/this.revenue) + 0.00).toFixed(2)))},
    clients: 0,
    budget: 0,
    clientsServed: function(){return (Math.round(this.budget/this.clients))},

    Calculators:{
        FMQs:{
            hoursSaved :{
                Q1: `On average, how many hours are spent monthly on administrative work concerning donations?`,
                Q1Help:`This includes generating and communicating donation reports, hours spent tracking and 
                reporting on in-kind donations gifts, reconciling donations with accounting systems, and hours 
                spent writing thank you letters for donations.` ,
                Q2: `On average, how many hours are spent monthly conducting and planning major outreach and 
                matching gift campaigns?`,
                Q3: `On average, how many hours are spent monthly on adminstrative work concerning grants?`,
                Q3Help:`This includes hours spent managing your grant pipeline, managing/reporting grant 
                deadlines, hours spent generating and communicating grant reports and hours spent on allocation.`,
                Q4: `On average, how many hours are spent monthly on tracking, reporting, and preparing tax reciepts annually?`,
                marks: [
                    {
                      value: 2.5,
                      label: "0-5"
                    },
                    {
                      value: 7.5,
                      label:"5-10"
                    },
                    {
                      value: 12.5,
                      label: "10-15"
                    },
                    {
                      value: 17.5,
                      label: "15-20"
                    },
                    {
                      value: 22.5,
                      label: "20+"
                    }
            
                  ],
                minVal: 2.5,
                maxVal: 22.5
            },
            dollarsSaved:{
                Q1: `On average, how much revenue is generated from donations annually?`,
                Q2: `On average, what is the value of grant revenue generated annually?`,
                Q3: `On average, how much money is spent on fundaraising management systems annually
                (including licensing, hosting, and support fee)?` ,
                Q4: `Estimated annual gross fundraising expenses`,
                Q5: `Estimated annuall gross fundraising revenue`
            },
            clientsServed:{
                Q1:`What is your organization's annual budget for the year`,
                Q2:`On average, how many unique clients does your organization serve in a year?`
            }
        },
        PMQs:{},
        GMQs:{},
        CBEQs:{},
        CDSQs:{}

    }
}
////////REDUCERS

//manages ROI results
//results will be updated and then requested then displayed
const resultReducer = (state = ROI.results, action) => {
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

// responds to Info componenet
const infoReducer = (state = ROI.userInfo, action) => {
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
                console.log(state)
            return { ...state, contactPhone:action.payload}
        default:
            return state;
   }
}



const rootReducer = combineReducers({
    //add other reducers when completed
    resultValues:resultReducer, 
    userInfo:infoReducer
});


export default rootReducer;