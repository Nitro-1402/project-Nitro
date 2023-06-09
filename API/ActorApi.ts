import { URL_API } from "@/constant/urlapi"
import AsyncCatch from "@/helper/AsyncCatch"
import axios from "axios"
export class ActorsApi{
    static getActors(params={}){
       const callback=(config:object)=>{
            // return axios.get(`${URL_API}movies/actors/`,{params:{...params},...config})
            return axios.get(`${URL_API}movies/actors/`)
        }
        return AsyncCatch(callback)
    }
    static getActor(id:any,params={}){
        const callback=(config:object)=>{
             return axios.get(`${URL_API}movies/actors/${id}`,{params:{...params}})
         }
         return AsyncCatch(callback)
     }
}

export class DirectorsApi{
    static getDirectors(params={}){
       const callback=(config:object)=>{
            // return axios.get(`${URL_API}movies/actors/`,{params:{...params},...config})
            return axios.get(`${URL_API}movies/directors/`)
        }
        return AsyncCatch(callback)
    }
    static getDirector(id:any,params={}){
        const callback=(config:object)=>{
             return axios.get(`${URL_API}movies/directors/${id}`,{params:{...params}})
         }
         return AsyncCatch(callback)
     }
}


            


