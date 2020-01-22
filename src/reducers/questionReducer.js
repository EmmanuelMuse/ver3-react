//ROI Questions - states
// Fundraising Management Questions
export const FMQs = {
    hourSaved :{
        HS1: `On average, how many hours are spent monthly on administrative work concerning donations?`,

        HS1Help:`This includes generating and communicating donation reports, hours spent tracking and 
        reporting on in-kind donations gifts, reconciling donations with accounting systems, and hours 
        spent writing thank you letters for donations.` ,
        
        HS2: `On average, how many hours are spent monthly conducting and planning major outreach and 
        matching gift campaigns?`,
        
        HS3: `On average, how many hours are spent monthly on adminstrative work concerning grants?`,
        HS3Help:`This includes hours spent managing your grant pipeline, managing/reporting grant 
        deadlines, hours spent generating and communicating grant reports and hours spent on allocation.`,
        HS4: `On average, how many hours are spent monthly on tracking, reporting, and preparing tax reciepts annually?`,
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
    dollarSaved:{

    },
    clientsServed:{
    }
}
export const FMQuestions = (state = FMQs, action) =>{
  return state;
}

//Program Management Questions
export const PMQs = {}
//Program Management Reducer
export const PMQuestions = (state = PMQs, action) =>{
  return state;
}

//Cloud-Based Document Storage
export const CBDSQs = {}
//Cloud-Based Document Storage Reducer
export const CBDSQuestions = (state = CBDSQs, action) =>{
  return state;
}

//Grant Management
export const GMQs = {}
//Grant Management Reducer
export const GMQuestions = (state = GMQs, action) => {
  return state;
}

//Cloud-Based Email
export const CBEQs = {}
//Cloud Based Email Reducer
export const CBEQuestions = (state = CBEQs, action) => {
  return state;
}

//Comprehensive Data Strategy
export const CDSQs = {}
//Comprehensive Data Stategy Reducer
export const CDSQuestions = (state = CDSQs, action) => {
  return state;
}


//manages the Qs state
//quesetions will be requested from the store
//Fundraising Management





