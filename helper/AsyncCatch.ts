export default async function AsyncCatch(callback:(e:object)=>Promise<any>){
    try{
        const data=await callback({withCredentials: true})
        if(data)
        return data
    }
    catch(e:any){
        if(e?.response?.data)
        return e?.response?.data
    }
}