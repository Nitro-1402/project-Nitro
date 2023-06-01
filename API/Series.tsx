import { URL_API } from "@/constant/urlapi"
import AsyncCatch from "@/helper/AsyncCatch"
import axios from "axios"
export class SeriesApi{
    static getEpisode(id:any,params={}){
        const callback=(config:object)=>{
             return axios.get(`${URL_API}movies/episodes/${id}`,{params:{...params},...config})
         }
         return AsyncCatch(callback)
     }
     static getSeries(id:any,params={}){
        const callback=(config:object)=>{
             return axios.get(`${URL_API}movies/movies/${id}/season/`,{params:{...params},...config})
         }
         return AsyncCatch(callback)
     }
}