import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import outstandingdoctorimg from "../../../assets/images/outdoctor.png";
import "./Specialty.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import * as actions from "../../../store/actions";
class OutStandingDoctor extends Component {
  componentDidMount = () => {
    this.props.fetchTopDoctor();
  };

  render() {
    return (
      <div className="section-content ">
        <div className="section-header">
          <span className="title-section"> Bac sy noi bat</span>
          <button className="btn-section">xem them</button>
        </div>

        <Slider {...this.props.settings}>
          <div className="item">
            <img src={outstandingdoctorimg} />
            <h3>asdfasdf</h3>
          </div>
          {/* <div className="item">
            <img src={outstandingdoctorimg} />
            <h3>asdfasdf</h3>
          </div>
          <div className="item">
            <img src={outstandingdoctorimg} />
            <h3>asdfasdf</h3>
          </div>
          <div className="item">
            <img src={outstandingdoctorimg} />
            <h3>asdfasdf</h3>
          </div>
          <div className="item">
            <img src={outstandingdoctorimg} />
            <h3>asdfasdf</h3>
          </div>
          <div className="item">
            <img src={outstandingdoctorimg} />
            <h3>asdfasdf</h3>
          </div>
          <div className="item">
            <img src={outstandingdoctorimg} />
            <h3>asdfasdf</h3>
          </div> */}
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
  return {
    fetchTopDoctor: () => dispatch(actions.fetchTopDoctor()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
