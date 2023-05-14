import { URL_API } from "@/constant/urlapi"
import AsyncCatch from "@/helper/AsyncCatch"
import axios from "axios"
interface LoginData{
    username:string
    ,password:string
}
interface SignUpData{
    username:string
    ,password:string,
    email:string
}
export class RegisterApi{
    static Login(data:LoginData,params={}){
       const callback=(config:object)=>{
            return axios.post(`${URL_API}members/login/`,data,{params:{...params},...config})
        }
        return AsyncCatch(callback)
    }
    static SignUp(data:SignUpData,params={}){
        const callback=(config:object)=>{
             return axios.post(`${URL_API}auth/users/`,data,{params:{...params},...config})
         }
         return AsyncCatch(callback)
     }
     static GetMe(params={}){
        let access=localStorage.getItem('accessToken')
        const callback=(config:object)=>{
             return axios.get(`${URL_API}auth/users/me/`,{params:{...params},...config,headers:{
                "Authorization" :"JWT " + access
            }})
         }
         return AsyncCatch(callback)
     }
}