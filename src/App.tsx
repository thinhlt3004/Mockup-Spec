import "./App.css";
import { Row, Col } from "antd";
import React, { FunctionComponent } from "react";
import {
  MainContent,
  About,
  PricePromotion,
  Comments,
  GetApp,
  Chapters,
  Related,
} from "./Components/";

const App: FunctionComponent = () => {
  return (
    <div className="app__container">
      <Row gutter={[32, 0]}>
        <Col span={16}>
          <MainContent />
          <PricePromotion />
          <Chapters />
        </Col>
        <Col span={8}>
          <About />
          <Related />
          <Comments />
          <GetApp />
        </Col>
      </Row>
    </div>
  );
};

export default App;
