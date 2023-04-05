//Transform Error of Class-Vlidator

interface errListType{
    property:string,
    constraints?:{
        [key:string]:string
    }
    [key:string]:any
}
export default function TransformError(errList:errListType[]){
    const errObject:{
        [key:string]:string[]
    }={
    }
    errList.forEach(e=>{
        if(e.constraints && e.property)
        errObject[e.property]=[...Object.values(e.constraints)]
    })
    return errObject
}