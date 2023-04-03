import React, { Component } from 'react'
import styles from '/styles/info.module.css'

export class MiniInfo extends Component {
    state = {
        content: [
            {
                text: 'دراما',
                id:'1'
            },
            {
                text: 'جنایی',
                id:'2'
            },
            {
                text: '+18',
                id:'3'
            },
            {
                text: 'آمریکا',
                id:'4'
            },
            {
                text: '2023',
                id:'5'
            },
            {
                text: ' تک فصل ',
                id:'6'
            },
            {
                text: ' دوبله ',
                id:'7'
            } 
        ]
    }
  render() {
    return (
        <div className={styles.infoBox}>
            {this.state.content.map(c => (
                <span className={styles.info} key={c.id}>{c.text}</span>
            ))}
        </div>
    )
  }
}

export default MiniInfo