import CustomImage from '@/ui/CustomImage'
import styles from '../../styles/comments.module.css'
import StarRating from '../rating/StarRating'
export default function Comment(){
    return(
        <div className={styles.container}>
            <div>
            <CustomImage style={{height:70,width:70,borderRadius:50}} src=''/>
            <div>
                <h3>رضا نوری</h3>
                <StarRating/>
            </div>
            </div>
            <h3>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</h3>

        </div>
    )
}