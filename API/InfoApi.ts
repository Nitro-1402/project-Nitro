import { URL_API } from "@/constant/urlapi"
import AsyncCatch from "@/helper/AsyncCatch"
import axios from "axios"
export class InfoApi{
    static seen(data:any,params={}){
       const callback=(config:object)=>{
            // return axios.get(`${URL_API}movies/movies/`,{params:{...params},...config})
            console.log(data)
            return axios.post(`${URL_API}lists/addWatchedList/`,data,{params:{...params},...config})
        }
        return AsyncCatch(callback)
    }
    static unseen(params={}){
        const callback=(config:object)=>{
             // return axios.get(`${URL_API}movies/movies/`,{params:{...params},...config})
             return axios.delete(`${URL_API}lists/addWatchedList/delete/`,{params:{...params},...config})
         }
         return AsyncCatch(callback)
     }

    static favorite(data:any,params={}){
        const callback=(config:object)=>{
             // return axios.get(`${URL_API}movies/movies/`,{params:{...params},...config})
             console.log(data)
             return axios.post(`${URL_API}lists/addFavourites/`,data,{params:{...params},...config})
         }
         return AsyncCatch(callback)
        }
    static unfavourite(params={}){
         const callback=(config:object)=>{
              // return axios.get(`${URL_API}movies/movies/`,{params:{...params},...config})
              return axios.delete(`${URL_API}lists/addFavourites/delete/`,{params:{...params},...config})
          }
          return AsyncCatch(callback)
        }
    static bookmark(data:any,params={}){
        const callback=(config:object)=>{
                // return axios.get(`${URL_API}movies/movies/`,{params:{...params},...config})
                console.log(data)
                return axios.post(`${URL_API}lists/addBookmarks/`,data,{params:{...params},...config})
            }
            return AsyncCatch(callback)
        }
    static unbookmark(params={}){
            const callback=(config:object)=>{
                // return axios.get(`${URL_API}movies/movies/`,{params:{...params},...config})
                return axios.delete(`${URL_API}lists/addBookmarks/delete/`,{params:{...params},...config})
            }
            return AsyncCatch(callback)
        }

        static star(data:any,params={}){
            const callback=(config:object)=>{
                    // return axios.get(`${URL_API}movies/movies/`,{params:{...params},...config})
                    console.log(data)
                    return axios.post(`${URL_API}movies/ratings/`,data,{params:{...params},...config})
                }
                return AsyncCatch(callback)
            }
        static restar(data:any , params={}){
                const callback=(config:object)=>{
                    // return axios.get(`${URL_API}movies/movies/`,{params:{...params},...config})
                    return axios.put(`${URL_API}movies/ratings/${data.id}/`,data,{params:{...params},...config})
                }
                return AsyncCatch(callback)
            }
        static unstar(params={}){
            const callback=(config:object)=>{
                // return axios.get(`${URL_API}movies/movies/`,{params:{...params},...config})
                return axios.delete(`${URL_API}movies/ratings/delete/`,{params:{...params},...config})
            }
            return AsyncCatch(callback)
        }
    
}