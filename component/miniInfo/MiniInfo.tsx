import React, { Component } from 'react'
import styles from '/styles/info.module.css'

export class MiniInfo extends Component {
    state = {
        content: [
            {
                text: 'Drama',
                id:'1'
            },
            {
                text: 'Crime',
                id:'2'
            },
            {
                text: '+18',
                id:'3'
            },
            {
                text: 'US',
                id:'4'
            },
            {
                text: '2023',
                id:'5'
            },
            {
                text: '1 season',
                id:'6'
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