import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import outstandingdoctorimg from "../../../assets/images/outdoctor.png";
import "./Specialty.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import LANGUAGE from "../../../store/actions"

import "slick-carousel/slick/slick-theme.css";
import * as actions from "../../../store/actions";
class OutStandingDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topDoctors: [],
    };
  }

  componentDidMount = () => {
    console.log("Outstanding :Did mount after render....");
    this.props.fetchTopDoctor();
  };

  //check thay doi cua prop va state de gan tri lai
  componentDidUpdate = (prevProps, prevState, snashot) => {
    //setState=> render, render xong thi update(neu update ma setState nua thi
    //render -> update, update ma setProp thi khong render va update nua)
    console.log("Outstanding doctor com did update");
    if (prevProps.topDoctors !== this.props.topDoctors) {
      this.setState({
        topDoctors: this.props.topDoctors,
      });
    }
  };

  render() {
    console.log("Outstanding render: with data:  ", this.props.topDoctors);
    let topDoctors = this.state.topDoctors;
    let { language } = this.props;
    return (
      <div className="section-content ">
        <div className="section-header">
          <span className="title-section"> Bac sy noi bat</span>
          <button className="btn-section">xem them</button>
        </div>

        <Slider {...this.props.settings}>
          {topDoctors &&
            topDoctors.length > 0 &&
            topDoctors.map((item, index) => {
              let nameVi = `${item.positionData.valueVi}, ${item.firstName}, ${item.lastName}`;
              let nameEn = `${item.positionData.valueEn}, ${item.firstName}, ${item.lastName}`;
              console.log("ITEMITEM: ", item);
              return (
                <div className="item">
                  <div>
                    <img src={outstandingdoctorimg} />
                  </div>
                  <div>
                    <h3>{language === "vi" ? nameVi : nameEn}</h3>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topDoctors: state.admin.topDoctors,
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTopDoctor: () => dispatch(actions.fetchTopDoctor()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
