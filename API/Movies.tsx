import { URL_API } from "@/constant/urlapi"
import AsyncCatch from "@/helper/AsyncCatch"
import axios from "axios"
export class MoviesApi{
    static getMovies(params={}){
       const callback=(config:object)=>{
            // return axios.get(`${URL_API}movies/movies/`,{params:{...params},...config})
            return axios.get(`${URL_API}movies/movies/`)
        }
        return AsyncCatch(callback)
    }
    static getMovie(id:any,params={}){
        let access=localStorage.getItem('accessToken')
        const callback=(config:object)=>{
             return axios.get(`${URL_API}movies/movies/${id}`,access?{params:{...params},headers:{
                "Authorization" :"JWT " + access}}:{params:{...params}})
         }
         return AsyncCatch(callback)
     }
}