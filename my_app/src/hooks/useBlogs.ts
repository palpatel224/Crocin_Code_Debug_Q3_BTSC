import axios from "axios";
import { BACKEND_URL } from "../config";
import {jwt_token} from "../config";
import { useState, useEffect } from "react";

export default function useBlogs(){
  const [blogArray, setBlogArray] = useState();

  const getBlogs = async()=>{
    try{
    const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
      headers : {
        Authorization : `Bearer ${jwt_token}` 
      }});
    setBlogArray(response.data)
  }
  
  catch(err){
    console.log("error")
  }
}
  useEffect(()=>{
    getBlogs();
  },[])

  return blogArray

};
