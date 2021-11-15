import React, { FunctionComponent } from "react";
import "./pricepromotion.css";
import { Row, Col } from "antd";
const PricePromotion: FunctionComponent = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="price-promotion__container">
      <p className="price-promotion__title">Pricing & Promotion</p>
      <Row className="price-promotion__row">
        <Col className="price-promotion__col half" span={12}>
          <div className="price-promotion__col-left-content">
            <span className="price-promotion__small">FREE</span>
            <span className="price-promotion__small-content">3 chapters</span>
          </div>
        </Col>
        <Col className="price-promotion__col" span={12}>
          <div className="price-promotion__col-left-content">
            <span className="price-promotion__small">LOCKED</span>
            <span className="price-promotion__small-content">
              7 chapters{" "}
              <span className="price-promotion__small">
                (
                <img
                  height="12"
                  width="12"
                  src={`${PF}/assets/coin.png`}
                  alt="coin"
                />
                5 / chapter)
              </span>
            </span>
          </div>
        </Col>
        <Col className="price-promotion__col full" span={24}>
          <div className="price-promotion__col-full-container">
            <div className="price-promotion__col-left-content">
              <span>Total Price</span>
              <span className="price-promotion__small">
                Instant access to all chapters • No Ad
              </span>
            </div>
            <div className="price-promotion__col-right-border">
              <img
                height="16"
                width="16"
                src={`${PF}/assets/coin.png`}
                alt="coin"
              />{" "}
              <span style={{ marginLeft: "8px" }}> 35</span>
            </div>
          </div>
        </Col>
        <Col className="price-promotion__col full" span={24}>
          <div className="price-promotion__col-full-container">
            <div className="price-promotion__col-left-content">
              <span className="price-promotion__col-INKR-extra">
                Save money with INKR Extra
              </span>
              <span className="price-promotion__small">
                Instant access to all chapters • No Ad • Extra saving
              </span>
            </div>
            <div className="price-promotion__col-right-content-container">
              <div className="price-promotion__col-right-content-top">
                <div className="price-promotion__col-right-content-discount">-50%</div>
                <div className="price-promotion__col-right-content-top">
                  <img
                    height="16"
                    width="16"
                    src={`${PF}/assets/coin.png`}
                    alt="coin"
                  />
                  <span className="price-promotion__col-right-content-old-price"> 35</span>
                  <span> 18</span>
                </div>
              </div>
              <span style={{ marginTop: '8px'}}>Saving rates may vary</span>
            </div>
          </div>
        </Col>
      </Row>
      <div className="price-promotion__end-title">Want to read for free? Learn more</div>
    </div>
  );
};

export default PricePromotion;
