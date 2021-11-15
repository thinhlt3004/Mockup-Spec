import React, { FunctionComponent } from "react";
import './maincontent.css';
import { Image, Tag, Button } from "antd";
const MainContent: FunctionComponent = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const tags: string[] = ["18+", "NEW", "TRENDING", "BESTSELLER", "MANGA"];
  return (
    <div className="main-content__container">
      <div className="main-content__left-content">
        <div>
          <Image
            className="main-content__left-img"
            src={`${PF}/assets/mainImg.png`}
            width={180} height='100%'
          ></Image>
        </div>
        <div className="main-content__content">
          <div>
            <p className="main-content__title">Kasane</p>
            <p className="main-content__subcontent">By Kodansha</p>
            <p className="main-content__subcontent">Drama • 10 Chapters</p>
            <div className="main-content__countContainer">
              <div className="main-content__count">
                <img style={{ height: '12px' }} src={`${PF}/assets/bookIcon.png`} alt="bookIcon" />
                <span className="main-content__countValue">74,483</span>
              </div>
              <div className="main-content__count">
                <img style={{ height: '12px' }} src={`${PF}/assets/likeIcon.png`} alt="likeIcon" />
                <span className="main-content__countValue">15,863</span>
              </div>
            </div>
            <div>
              {tags.map((i, index) => (
                <Tag className="main-content__tag" key={index}>{i}</Tag>
              ))}
            </div>
          </div>
          <Button className="main-content__button">Read First Chapter for FREE</Button>
        </div>
      </div>
      <div className="main-content__rightContainer">
        <div className="main-content__rightIcon">
            <img src={`${PF}/assets/shareIcon.png`} alt="shareIcon" />
        </div>
        <div className="main-content__rightIcon">
            <img src={`${PF}/assets/dotIcon.png`} alt="shareIcon" />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
