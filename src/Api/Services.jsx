import { AXIOS } from "./Axios";

const getData=async(url,set)=>{
    const response=await AXIOS.get(url);
    set(response.data)
    
}
 const postData=async(url,data)=>{
    try {
        const response=await AXIOS.post(url,data);
       
    } catch (error) {
        console.log(error);
    }
 }
 const putData=async(url,data)=>{
    try {
        const response=await AXIOS.put(url,data);
       
    } catch (error) {
        console.log(error)
    }
 }

 const deletePost=async(url)=>{
    try {
        const response=await AXIOS.delete(url)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
 }

export{getData,postData,deletePost,putData};