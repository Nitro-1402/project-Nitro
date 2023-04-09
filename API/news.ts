import { URL_API } from "@/constant/urlapi"
import AsyncCatch from "@/helper/AsyncCatch"
import axios from "axios"
export class ProjectApi{
    static getProduct(params={}){
       const callback=(config:object)=>{
            return axios.get(`${URL_API}movies/news/`,{params:{...params},...config})
        }
        return AsyncCatch(callback)
    }
}