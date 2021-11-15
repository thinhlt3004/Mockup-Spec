import React, { FunctionComponent } from "react";
import "./chapter.css";
interface IChapter {
  img: string;
  chap: number;
  price: number;
  unblock: boolean;
}
interface IProps {
  last?: boolean;
  check?: boolean;
  chap: IChapter;
}
const Chapter: FunctionComponent<IProps> = ({ last, check, chap }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div
      className={
        last && check
          ? "chapter__container_last"
          : check
          ? "chapter__container_list"
          : "chapter__container"
      }
    >
      <div className="chapter__left">
        <div className="chapter__img-container">
          {!chap.unblock && <div className="chapter__block-opacity">
            <div className="chapter__block-icon-container">
              <img src={`${PF}/assets/lock.png`} alt="" />
            </div>
          </div>}
          <img src={`${PF}/assets/chapters/ch1.png`} alt="ch1" />
          {check && (
            <img
              className="chapter__progress-bar"
              src={`${PF}/assets/progress-bg.png`}
              alt=""
            />
          )}
        </div>
        <div className="chapter__content">
          <span className="chapter__name">
            Chapter {chap.chap}
          </span>
          {last && <span className="chapter__date">Last read 2 days ago</span>}
        </div>
      </div>

      {!last && (
        <div className="chapter__right">
          {chap.price > 0 && (
            <img
              style={{ objectFit: "cover", marginRight: "4px" }}
              height="16"
              width="16"
              src={`${PF}/assets/coin.png`}
              alt="star"
            />
          )}
          <span className="chapter__price">
            {chap.price > 0 ? chap.price : "FREE"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Chapter;
