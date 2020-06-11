import React, { Component } from 'react'
import { Link } from "react-router-dom";
import style from "./QRCode.module.css";
import QrReader from 'react-qr-scanner'
import Button from '../../Ui/Button/Button';


class Camera extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 500,
      result: 'noResult',
      text: 'Scan je kaartje'
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(result){
    if(result){
        this.setState({ result })
        this.setState({ text: 'succes!' })
      }
  }
  handleError(err){
    console.error(err)
  }
  render(){
    return(
      <div className={style.camera}>
        <QrReader
            style={{flex:1, alignItems:'center',justifyContent:'center', alignSelf:'stretch', height: '100vh'}}
            delay={this.state.delay}
            onError={this.handleError}
            onScan={this.handleScan}
          />
          <div className={style.bottomBar}>
              {this.state.result !== 'noResult' ? 
              <div className={style.succesMessage}>
                <div className={style.succesWrapper}>
                    <lottie-player src="https://assets4.lottiefiles.com/datafiles/8UjWgBkqvEF5jNoFcXV4sdJ6PXpS6DwF7cK4tzpi/Check Mark Success/Check Mark Success Data.json"  background="transparent"  speed="1"  style={{width: 70, height: 70}} autoplay></lottie-player>
                    <p className={style.btnText}>{this.state.text}</p>
                </div>
                <Link className={style.succesButton} to={'/MacroMap'}>
                    <Button
                        button={"button"} 
                        content={<span className={style.btnText}>Begin</span>} 
                        height={86}
                        width={305} />
                </Link>
            </div> : <p className={style.btnText}>{this.state.text}</p>}
            
          </div>
      </div>
    )
  }
}

export default Camera