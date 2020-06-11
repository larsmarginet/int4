import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import { Link } from 'react-router-dom';


import style from "./QRCode.module.css";
import Button from '../../Ui/Button/Button';



class CameraLegacy extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'noResult',
      text: 'Scan je kaartje'
    }

    this.handleScan = this.handleScan.bind(this)
    this.openImageDialog = this.openImageDialog.bind(this)
  }

  handleScan(result){
    if(result){
      this.setState({ result })
      this.setState({ text: 'succes!' })
    } else {
        this.setState({ text: 'Oeps... Er is iets fout gegaan. Probeer het opnieuw.' })
    }
  }

  handleError(err){
    console.error(err)
  }

  openImageDialog() {
    this.refs.qrReader1.openImageDialog()
  }

  render(){
    const previewStyle = {
      height: 0,
      width: 0,
    }

    return(
      <div className={style.wrapper}>
        <QrReader
          ref="qrReader1"
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          legacyMode
        />
        {this.state.result === 'noResult' ? <Button
            action={this.openImageDialog}
            button={"button"} 
            content={<span className={style.btnText}>scan</span>} 
            height={86}
            width={305} /> 
            :
            <>
                <Link to={'/ChapterOne'}>
                    <Button
                        button={"button"} 
                        content={<span className={style.btnText}>Begin</span>} 
                        height={86}
                        width={305} />
                </Link>
                <lottie-player src="https://assets4.lottiefiles.com/datafiles/8UjWgBkqvEF5jNoFcXV4sdJ6PXpS6DwF7cK4tzpi/Check Mark Success/Check Mark Success Data.json"  background="transparent"  speed="1"  style={{width: 100, height: 100}} autoplay></lottie-player>
            </>
            
        }
        
        <p className={style.text}>{this.state.text}</p>
      </div>
    )
  }
}

export default CameraLegacy;