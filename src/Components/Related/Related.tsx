import React, { FunctionComponent } from "react";
import { relatedMovies } from "./../../dummyData";
import "./related.css";
interface IRelated {
  img: string;
  title: string;
  rank: string;
  producer: string;
  reads: number;
}

const Related: FunctionComponent = () => {
  const data: IRelated[] = relatedMovies;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="related__container">
      <h1 className="related__title">Related Titles</h1>
      <div className="related__list">
        {data.map((i, index) => (
          <div className="related__item" key={index}>
            <img
              className="related__img"
              src={`${PF}/assets/movies/${i.img}`}
              alt={i.img}
            />
            <div className="related__item-content">
              <span className="related__item-content-title">{i.title}</span>
              <span className="related__item-content-rank">
                <img
                  src={`${PF}/assets/crown.png`}
                  alt="crown"
                  height="16"
                  width="16"
                  style={{ marginRight: "5px" }}
                />
                {i.rank}
              </span>
              <span className="related__item-content-info">{i.producer}</span>
              <span className="related__item-content-info">{i.reads}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Related;
