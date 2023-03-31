import React, { Component } from 'react'
import styles from '/styles/info.module.css'

export class Summery extends Component {
    state = {
        text:' چارلی توانایی فوق العاده ای در تشخیص راست و دروغ حرف آدم ها دارد. او با ماشین خود دل به جاده می زند و با هر بار توقف، با آدم ها و جرائم عجیبی روبرو می شود که نمی تواند به سادگی از کنارشان بگذرد.سریال پوکر فیس به کارگردانی ریان جانسون و ایان بی مک دونالد در سال 2023 ساخته شده است. این سریال محصول کشور آمریکا و در ژانر رازآلود و اکشن می‌باشد. در این سریال ناتاشا لیون، بنجامین برت، اسکات ووگل، سایمون هلبرگ و براندون میشل هال به هنرمندی پرداخته‌اند.'
    }
  render() {
    return (
      <div className={styles.summery}>{this.state.text}</div>
    )
  }
}

export default Summery