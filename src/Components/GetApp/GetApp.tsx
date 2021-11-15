import { Image } from 'antd';
import React, { FunctionComponent } from 'react'
import './getapp.css';
const GetApp : FunctionComponent = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="getapp__container">
            <div className="getapp__left">
                <span className="getapp__title">Get The App</span>
                <span className="getapp__content">Love this title? Scan the QR code to continue reading right on your mobile devices.</span>
            </div>          
            <Image src={`${PF}/assets/QRcode.png`} style={{cursor: 'pointer', width: '116px', height: '116px'}}></Image>
        </div>
    )
}

export default GetApp 
