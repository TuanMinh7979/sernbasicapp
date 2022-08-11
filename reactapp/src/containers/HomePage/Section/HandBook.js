import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import handbookImg from "../../../assets/images/handbook.jpg";

class HandBook extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    return (
      <div className="section-content ">
        <div className="section-header">
          <span className="title-section">Cam nang</span>
          <button className="btn-section">xem them</button>
        </div>

        <Slider {...settings}>
          <div className="item">
            <div
              className="img"
              style={{
                backgroundImage: `url(${handbookImg})`,
              
              }}
            ></div>
            <h3>asdfasdf</h3>
          </div>
          <div className="item">
          <div
              className="img"
              style={{
                backgroundImage: `url(${handbookImg})`,
              
              }}
            ></div>
            <h3>asdfasdf</h3>
          </div>
          <div className="item">
          <div
              className="img"
              style={{
                backgroundImage: `url(${handbookImg})`,
              
              }}
            ></div>
            <h3>asdfasdf</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
// Mỗi khi store update mapStateToProps sẽ được gọi, object mà nó trả về sẽ được merge với props của container.
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
