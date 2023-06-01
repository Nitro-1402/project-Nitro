import React , {useEffect , useState} from 'react'
import CustomImage from '@/ui/CustomImage'
import styles from '/styles/info.module.css'
import Episode from './Epiode'
import { SeriesApi } from '@/API/Series'
import SeasonNum from './SeasonNum'

const Series = (
  props:any
  
  ) => {
  return (
    <div className={styles.seriesBox}>
      <SeasonNum {...props}/>
        <div>
            <Episode {...props}/>
        </div>
    </div>
  )
}

export default Series