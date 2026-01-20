import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

export const loginAPI=async(reqBody)=>{
    return await commonAPI("POST",`${serverURL}/login`,reqBody)
}

export const registerAPI=async(reqBody)=>{
    return await commonAPI("POST",`${serverURL}/register`,reqBody)
}

export const googleloginAPI=async(reqBody)=>{
    return await commonAPI("POST",`${serverURL}/google-login`,reqBody)
}
// ------------------admin------------------
//add job data
export const addJobDataAPI = async(reqBody)=>{
    return await commonAPI("post",`${serverURL}/addjob`,reqBody)
}

//get all job
export const getalljobAPI=async()=>{
    return await commonAPI("GET",`${serverURL}/getalljob`)
}

//delete job
export const deletejobAPI=async(id)=>{
    return await commonAPI("DELETE",`${serverURL}/deletejob/${id}`)
}

//get application
export const getapplicationadminAPI=async(reqHeader)=>{
return await commonAPI("GET",`${serverURL}/getapplicationadmin`,"",reqHeader)
}

//update status
export const updatestatusAPI=async(id,reqBody,reqHeader)=>{
return await commonAPI("PUT",`${serverURL}/applcationstatus/${id}`,reqBody,reqHeader)
}
//---------------------user-------------
//add application
export const addapplicationAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${serverURL}/application`,reqBody,reqHeader)
}

//get application
export const getapplicationAPI=async()=>{
return await commonAPI("GET",`${serverURL}/getapplication`)
}