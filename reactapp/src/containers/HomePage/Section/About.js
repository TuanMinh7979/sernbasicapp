import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class About extends Component {
  render() {
    return (
      <div className="section-content section-about ">
        <div className="section-header">Truyen thong noi gi ve hoidanit</div>
        <div className="about-content">
          <div className="about-content-left">
            <iframe
              width="560"
              height="200"
              src="https://www.youtube.com/embed/147SkAVXEqM?list=PLncHg6Kn2JT6E38Z3kit9Hnif1xC_9VqI"
              title="#51 Kết Thúc Design Giao Diện Clone BookingCare.vn 4 | React.JS Cho Người Mới Bắt Đầu"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="about-content-right">
           demo text
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
