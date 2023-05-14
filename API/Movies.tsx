import { URL_API } from "@/constant/urlapi"
import AsyncCatch from "@/helper/AsyncCatch"
import axios from "axios"
export class MoviesApi{
    static getMovies(params={}){
       const callback=(config:object)=>{
            return axios.get(`${URL_API}movies/movies/`,{params:{...params},...config})
        }
        return AsyncCatch(callback)
    }
    static getMovie(id:any,params={}){
        const callback=(config:object)=>{
             return axios.get(`${URL_API}movies/movies/${id}`,{params:{...params},...config})
         }
         return AsyncCatch(callback)
     }
}