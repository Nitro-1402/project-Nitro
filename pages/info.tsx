import React, { Component } from 'react'
import styles from '../styles/info.module.css'
import Card from './components/card/Card'
import Middle from './components/layout/Middle'
import Navbar from './components/navbar/Navbar'
import Top from './components/layout/Top'


export class info extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Top/>
        <div className= {styles.middleView}>
          <div className= {styles.leftPart}>
            <Card/>
          </div>
          <div className= {styles.rightPart}>
            <Middle/>
          </div>
        </div>
        </div>
    )
  }
}

export default info