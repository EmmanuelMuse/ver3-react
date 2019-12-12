// Fundraising Management Questions
export const FMQs = {
    time1: "On average, how many hours are spent monthly on administrative work concerning donations?",
    time1Help:"This includes generating and communicating donation reports, hours spent tracking and reporting "+
    "on in-kind donations gifts, reconciling donations with accounting systems, and hours spent writing thank you letters for donations." ,
    time2: "On average, how many hours are spent monthly conducting and planning major outreach and matching gift campaigns?",
    time3: "On average, how many hours are spent monthly on adminstrative work concerning grants?",
    time3Help:"This includes hours spent managing your grant pipeline, managing/reporting grant deadlines," + ""
    + "hours spent generating and communicating grant reports and hours spent on allocation.",
    time4: "On average, how many hours are spent monthly on tracking, reporting, and preparing tax reciepts annually?" 
}

//Program Management Questions
export const PMQs ={}

//Cloud-Based Document Storage
export const CBDSQs ={}


//Grant Management
export const GMQs = {}

//Cloud-Based Email
export const CBEQs = {}

//Comprehensive Data Strategy
export const CDSQs = {}


//manages the Qs state
//quesetions will be requested from the store
//Fundraising Management
export const FMQuestions = (state = FMQs, action) =>{
    return state;
}
//Program Management
export const PMQuestions = (state = PMQs, action) =>{
    return state;
}
//Cloud-Based Document Storage
export const CBDSQuestions = (state = CBDSQs, action) =>{
    return state;
}
//Grant Management
export const GMQuestions = (state = GMQs, action) => {
    return state;
}
//Cloud Based Email
export const CBEQuestions = (state = CBEQs, action) => {
    return state;
}
//Comprehensive Data Stategy
export const CDSQuestions = (state = CDSQs, action) => {
    return state;
}