import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./HomeHeader.scss";
class HomeHeader extends Component {
  render() {
    return (
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
            <div className="flag">
              VN
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
