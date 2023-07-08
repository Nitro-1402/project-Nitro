import { URL_API } from "@/constant/urlapi"
import AsyncCatch from "@/helper/AsyncCatch"
import axios from "axios"
export class NewsApi{
    static getList(params={}){
       const callback=(config:object)=>{
            return axios.get(`${URL_API}movies/news/`,{params:{...params}})
        }
        return AsyncCatch(callback)
    }
    static getNews(id:any,params={}){
        const callback=(config:object)=>{
             return axios.get(`${URL_API}movies/news/${id}`,{params:{...params}})
         }
         return AsyncCatch(callback)
     }
}