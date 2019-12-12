//Hours Saved Math
export const collectTime = (id,event) => {
    console.log(event);
    console.log(id);
    return {
        type: 'ADD_Time', payload: event, id
    }
}

//Dollars Saved Math
export const collectMoney = (id,event) => {
    console.log(event);
    console.log(id);
    return{
        type: 'ADD_Money',  payload: event, id
    }
}

//CDR Math
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


