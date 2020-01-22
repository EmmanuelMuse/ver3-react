//responds to Info componenet
const infoReducer = (state, action) => {
    //debugging line - see if actions dispatch to reducer
    //    console.log(action) 
       switch(action.type){
            case 'ADD_Contact':
                return { ...state.userInfo, contactName: action.payload}
    
            case 'ADD_OrgName':
                return   { ...state.userInfo, orgName: action.payload}
    
            case 'ADD_ProjType':
                return { ...state.userInfo, projectType: action.payload}   
    
            case 'ADD_Address':
                return { ...state.userInfo, orgAddress:action.payload}
    
            case 'ADD_Email':
                    //debugging lines
                    // console.log(user)
                    // console.log(state)
                return { ...state.userInfo, contactEmail:action.payload}
            case 'ADD_Phone':
                    // console.log(state.userInfo)
                return { ...state.userInfo, contactPhone:action.payload}
            default:
                return state.userInfo;
       }
}
export default infoReducer;