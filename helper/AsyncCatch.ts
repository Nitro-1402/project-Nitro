export default async function AsyncCatch(callback:(e:object)=>Promise<any>){
    try{
        let access=localStorage.getItem('accessToken')
        // let refresh=localStorage.getItem('refreshToken')
        // console.log(access,refresh)
        const data=await callback({withCredentials: false,headers:{
            "Authorization" :"JWT " + access
        }})
        if(data)
        return{status:"success", content:data.data}
        // return data
    }
    catch(e:any){
        if(e?.response?.data)
        return{status:"error", content:e?.response?.data}
    }
}