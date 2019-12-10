//Hours Saved Math
export const collectTime = (input) => {
    return {
        type: 'ADD_Time', payload: input
    }
}


//Dollars Saved Math
export const collectDollars = (input) => {
    return{
        type: 'ADD_Money', payload: input
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


