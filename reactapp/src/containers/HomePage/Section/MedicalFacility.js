import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import csytnbimg from "../../../assets/images/csytnb.jpg";
import "./Specialty.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class MedicalFacility extends Component {
  render() {
    return (
      <div className="section-content ">
        <div className="section-header">
          <span className="title-section"> Co so y te noi bat</span>
          <button className="btn-section">xem them</button>
        </div>

        <Slider {...this.props.settings}>
          <div className="item">
            <img src={csytnbimg} />
            <h3>asdfasdf</h3>
          </div>
          <div className="item">
            <img src={csytnbimg} />
            <h3>asdfasdf</h3>
          </div>
          <div className="item">
            <img src={csytnbimg} />
            <h3>asdfasdf</h3>
          </div>
          <div className="item">
            <img src={csytnbimg} />
            <h3>asdfasdf</h3>
          </div>
          <div className="item">
            <img src={csytnbimg} />
            <h3>asdfasdf</h3>
          </div>
          <div className="item">
            <img src={csytnbimg} />
            <h3>asdfasdf</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
