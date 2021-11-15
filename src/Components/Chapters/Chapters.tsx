import React, { FunctionComponent, useEffect, useState } from "react";
import {Chapter} from './../index';
import "./chapters.css";
import {chapters} from './../../dummyData';
interface IChapter{
    img: string;
    chap:number;
    price:number;
    unblock: boolean;
}
const Chapters: FunctionComponent = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const chaps : IChapter[] = chapters;
  const [current, setCurrent] = useState<IChapter|null>(null);
  useEffect(() => {
      if(chaps !== undefined && chaps.length > 0) {
        setCurrent(chaps.find(chap => chap.chap === 1) as IChapter);
      }
  },[chaps])

  const handleClick = (e : React.MouseEvent<HTMLDivElement, MouseEvent>, chap : IChapter) => {
    if(current?.chap !== chap.chap && chap.unblock === true){
        setCurrent(chap);
    }   
  }
  if(!current) return null;
  return (
    <div className="chapters__container">
      <h1 className="chapters__title">Last read</h1>
      <Chapter last={true} check={true} chap={current}/>
      <div className="chapters__chapters-container">
        <div>
          <h1 className="chapters__chaps-title">{chaps.length} chapters</h1>
          <span className="chapters__content">New chapter every Thursday</span>
        </div>
        <div>
          <span className="chapters_icon-button">
            <img src={`${PF}/assets/bell.png`} alt="bell" />
          </span>
          <span className="chapters_icon-button">
            <img src={`${PF}/assets/down.png`} alt="down" />
          </span>
        </div>
      </div>
      {chaps.map((i, index) => (
          <div key={index} onClick={(e) =>handleClick(e, i)} >
              <Chapter check={i.chap === current?.chap} chap={i}/>
          </div>
      ))}
    </div>
  );
};

export default Chapters;
