import React, { useState } from 'react';
import QrReader from 'react-qr-scanner';
import Lottie from 'react-lottie';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useStore } from "../../../hooks/UseStore";
import style from "./QRCode.module.css";
import Button from '../../Ui/Button/Button';
import * as check from './check.json';


const CameraLegacy = () => {
  const { id } = useParams();
  const store = useStore();
  const history = useHistory();

  const level = store.arts[0].resolveLevel(id);
  const code = level.code;
  const number = store.arts[0].levels.indexOf(level);

  const delay = 500;
  const [text, setText] = useState(`Scan je kaartje #${number+1}`);
  const [result, setResult] = useState('noResult');

  const qrReader1 = React.createRef();

  const handleScan = (result) => {
    if(result){
      if(result === code ){
        setText('succes!');
        setResult(result);
        level.unlock();
      } else if (result !== code) {
        setText('Deze code is niet gelding voor dit level.');
      }
    } else {
      setText('Oeps... Er is iets fout gegaan. Probeer het opnieuw.')
    }
  }

  const handleError = (err) => {
    console.error(err)
  }

  const openImageDialog = () => {
    qrReader1.current.openImageDialog()
  }

    return (
      <main className={style.wrapper}>
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
          ref={qrReader1}
          delay={delay}
          style={{
            height: 0,
            width: 0,
          }}
          onError={handleError}
          onScan={handleScan}
          legacyMode
        />
        {result === 'noResult' ? <Button
            action={openImageDialog}
            button={"button"} 
            content={<span className={style.btnText}>scan</span>} 
            height={86}
            width={305} /> 
            :
            <>
                <Link to={`/${level.name}`}>
                    <Button
                        button={"button"} 
                        content={<span className={style.btnText}>Begin</span>} 
                        height={86}
                        width={305} />
                </Link>
                <Lottie height={100} width={100} style={{margin: 0}} options={{
                      loop: false,
                      autoplay: true,
                      animationData: check.default,
                  }}/>
            </>
        }
        <p className={style.text}>{text}</p>
      </main>
    )
  }

export default CameraLegacy;