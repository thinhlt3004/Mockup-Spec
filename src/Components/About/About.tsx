import React, { FunctionComponent, useState } from "react";
import './about.css';
import { Tag, Avatar } from "antd";
import {creditList, factList, dummyAbout} from './../../dummyData';
interface ICredit {
  img: string;
  name: string;
  type: string;
}
interface IFacts {
  type: string;
  desc: string;
}

interface IAbout{
  genres : string[];
  desc: string;
  movies: number[];
}

const About: FunctionComponent = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [show, setShow] = useState<boolean>(false);
  const dummy : IAbout = dummyAbout;
  const credits: ICredit[] = creditList;
  const facts: IFacts[] = factList;
  return (
    <div className="about__container">
      <p className="about__title">About this</p>
      <p className="about__mainCatgegory">Genres</p>
      <div className="about__tags">
        {dummy.genres.map((i, index) => (
          <Tag className="about__tags-item" key={index}>
            {i}
          </Tag>
        ))}
      </div>
      <p className="about__subtitle">Summary</p>
      <span className="about__summary-content">
        {show ? dummy.desc : dummy.desc.length > 239 ? dummy.desc.substring(0, 239) + "..." : dummy.desc.substring(0, 239)}

      </span>
      <div
        className={
          show ? "about__button-container hide" : "about__button-container"
        }
      >
        <p className="about__button" onClick={() => setShow(true)}>
          Show More
        </p>
      </div>
      <div className={!show ? "about__view-more-hide" : "about__view-more"}>
        <div className="about__img-container">
          {dummy.movies.map((i, index) => (
            <img
              className="about__img-list"
              key={index}
              src={`${PF}/assets/movies/movie${i}.png`}
              alt={`movie${i}`}
            />
          ))}
        </div>
        <p className="about__subtitle">Credits</p>
        <div className="about__credit-container">
          {credits.map((i, index) => (
            <div key={index} className="about__credit-item">
              <Avatar size={40} src={`${PF}/assets/credits/${i.img}`} />
              <div className="about__credit-content">
                <span className="about__credit-name">{i.name}</span>
                <span className="about__credit-type">{i.type}</span>
              </div>
            </div>
          ))}
        </div>
        <div>
          <p className="about__subtitle">Other Facts</p>
          {facts.map((i, index) => (
            <div key={index} className="about__fact-item">
              <p className="about__fact-type">{i.type}</p>
              <p>:</p>
              <p className="about__fact-desc">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
