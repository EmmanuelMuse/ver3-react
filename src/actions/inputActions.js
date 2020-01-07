//actions must be dispatched to the reducer -> they are dispatched within components
/////ACTIONS
//type = what the action does -> action identifer
    //used in switch statement
//payload = return value

///Input Actions
export const updateContact = (input) => {
    return{ type:'ADD_Contact', payload: input }
}
    
export const updateOrgName = (input) =>{
    return{ type:'ADD_OrgName', payload: input }
}

export const updateProjType = (input) => {
    return{ type:'ADD_ProjType', payload: input }
}

export const updatePhone = (input) => {
    return{ type:'ADD_Phone', payload: input }  
}

export const updateEmail = (input) => {
    return{ type:'ADD_Email', payload: input }
}
export const updateAddress = (input) => {
    return{ type:'ADD_Address', payload: input }
}
