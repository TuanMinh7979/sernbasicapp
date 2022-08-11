import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./Specialty.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import specialtyImg from "../../../assets/images/star2.jpg";

class Specialty extends Component {
  render() {
    return (
      <div className="section-content ">
        <div className="section-header">
          <span className="title-section"> Chuyen khoa pho bien</span>
          <button className="btn-section">xem them</button>
        </div>

        <Slider {...this.props.settings}>
          <div className="item">
            <div
              className="img"
              style={{
                backgroundImage: `url(${specialtyImg})`,
               
              }}
            ></div>
            <h3>asdfasdf</h3>
          </div>
          <div className="item">
            <div
              className="img"
              style={{
                backgroundImage: `url(${specialtyImg})`,
               
              }}
            ></div>
            <h3>asdfasdf</h3>
          </div>
          <div className="item">
            <div
              className="img"
              style={{
                backgroundImage: `url(${specialtyImg})`,
               
              }}
            ></div>
            <h3>asdfasdf</h3>
          </div>
          <div className="item">
            <div
              className="img"
              style={{
                backgroundImage: `url(${specialtyImg})`,
               
              }}
            ></div>
            <h3>asdfasdf</h3>
          </div>
          <div className="item">
            <div
              className="img"
              style={{
                backgroundImage: `url(${specialtyImg})`,
               
              }}
            ></div>
            <h3>asdfasdf</h3>
          </div>
          <div className="item">
            <div
              className="img"
              style={{
                backgroundImage: `url(${specialtyImg})`,
               
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
