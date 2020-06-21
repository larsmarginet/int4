import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import Lottie from 'react-lottie';
import { useStore } from "../../../hooks/UseStore";
import style from "./QRCode.module.css";
import QrReader from 'react-qr-scanner';
import Button from '../../Ui/Button/Button';
import * as check from './check.json';


const Camera = () => {
  const { id } = useParams();
  const store = useStore();
  const history = useHistory();

 
  const level = store.arts[0].resolveLevel(id);
  const code = level.code;
  const number = store.arts[0].levels.indexOf(level);

  const delay = 500;
  const [text, setText] = useState(`Scan je kaartje #${number+1}`);
  const [result, setResult] = useState('noResult');
 
  const handleScan = (result) => {
    if(result) {
      if(result === code ){
        setText('succes!');
        setResult(result);
        level.unlock();
        store.update();
      } else if (result !== code) {
        setText('Deze code is niet gelding voor dit level.');
      }
    }
  }
  const handleError = (err) => {
    console.error(err)
  }

  const date = new Date();

    return (
      <div className={style.camera}>
        <div className={style.button}>
              <Button
                action={() => history.goBack()}
                button={"square"} 
                content={
                    <svg className={style.back} width="71" height="36" viewBox="0 0 71 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M38.0377 22.7673L0.239083 26.7291L2.9839 7.83182L40.4752 10.5751L40.4752 0.211637L70.6504 16.3664L38.0377 35.874L38.0377 22.7673Z" fill="#FFDD66"/>
                    </svg>
                } 
                height={86}/>
            </div>
        <QrReader
            style={{flex:1, alignItems:'center',justifyContent:'center', alignSelf:'stretch',minHeight: '100vh',  minWidth: '100vw'}}
            delay={delay}
            onError={handleError}
            onScan={handleScan}
          />
          <div className={style.bottomBar}>
              {result !== 'noResult' ? 
              <div className={style.succesMessage}>
                <div className={style.succesWrapper}>
                  <Lottie height={70} width={70} style={{margin: 0}} options={{
                      loop: false,
                      autoplay: true,
                      animationData: check.default,
                  }}/>
                    <p className={style.btnText}>{text}</p>
                </div>
                <Link className={style.succesButton} to={`/${level.name}`}>
                    <Button
                        button={"button"} 
                        content={<span className={style.btnText}>Begin</span>} 
                        height={86}
                        width={305} />
                </Link>
            </div> : <div className={style.linkWrapper}><p className={style.btnText}>{text}</p>{ (store.arts[0].levels[number-1].timestamp <= (date.getTime() - 86400000)) ?  <Link className={style.link} to="/">Ik heb geen kaartje ontvangen</Link> : "" }</div>}
          </div>
      </div>
    )
}

export default Camera