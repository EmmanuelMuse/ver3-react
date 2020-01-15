//Hours Saved 
export const collectTime = (id,event) => {
    return {
        type: 'ADD_Time', payload: event, id
    }
}

//Dollars Saved 
export const collectMoney = (id,event) => {
   
    return{
        type: 'ADD_Money',  payload: event, id
    }
}

//CDR 
export const expenses = (input) => {
    return{
        type:'ADD_Expenses', payload: input
    }
}
export const revenue = (input) => {
    return{
        type:'ADD_Revenue', payload: input
    }
}

//Clients Served 
export const budget = (input) => {
    return {
        type: 'ADD_Budget', payload: input
    }
}

export const clients = (input) => {
    return { 
        type: 'ADD_UniqueClients', payload: input
    }
}
