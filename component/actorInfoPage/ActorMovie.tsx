import CustomImage from '@/ui/CustomImage'


export default function ActorMovie ({image='/image/test.jpeg',name='terminator'}:{image?:string,name?:string}){
    return(
        <div style={{minWidth:'155px',
            width: '155px',
            height:'290px',
            margin:'20px',
            overflow: 'hidden',
            direction: 'rtl'}}>
            <div style={{width:"100%",height:227,overflow:'hidden'}}>
                <CustomImage src={image?image:''}style={{width:"100%",height:227,overflow:'hidden', borderRadius:'10px'}}/>
            </div>
            <h4 style={{marginLeft:10,padding:0,color:'aliceblue'}}>{name}</h4>

        </div>
    )
}