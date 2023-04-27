export default async function AsyncCatch(callback:(e:object)=>Promise<any>){
    try{
        const data=await callback({withCredentials: false})
        if(data)
        return{status:"success", content:data.data}
        // return data
    }
    catch(e:any){
        if(e?.response?.data)
        return{status:"error", content:e?.response?.data}
    }
}