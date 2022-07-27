import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./HomeHeader.scss";
class HomeHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i class="fas fa-bars"></i>
              <div className="header-logo"></div>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b>Chuyen khoa</b>
                </div>
                <div className="sub-title">Tim bac sy theo chuyen khoa</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Co co y te</b>
                </div>
                <div className="sub-title">Chon benh vien phong kham</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Bac sy</b>
                </div>
                <div className="sub-title">Chon bac sy gioi</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Goi Kham</b>
                </div>
                <div className="sub-title">Kham suc khoe tong quat</div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i class="fas fa-question-circle"></i> Ho tro
              </div>
              <div className="flag">VN</div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div class="content-up">
            <div className="title1">NEN TANG Y TE</div>
            <div className="title2">CHAM SOC SUC KHOE TOAN DIEN</div>
            <div className="search">
              <i class="fas fa-search"></i>
              <input type="text" />
            </div>
          </div>
          <div class="content-down">
            <div className="options">
              <div className="option-child">
                <div className="icon-child"><i class="fas fa-home"></i></div>
                <div className="text-child"></div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
