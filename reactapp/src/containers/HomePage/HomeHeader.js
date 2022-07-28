import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";
import { changeLanguageAction } from "../../store/actions";
class HomeHeader extends Component {
  hdlChangeLanguge = (language) => {
    this.props.changeLanguageActionComMethod(language);
  };
  render() {
    let curlanguage = this.props.language;

    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars"></i>
              <div className="header-logo"></div>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.specialty"></FormattedMessage>
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="homeheader.searchdoctor"></FormattedMessage>
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.healthy-facility"></FormattedMessage>
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="homeheader.select-room"></FormattedMessage>
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.doctor"></FormattedMessage>
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="homeheader.select-doctor"></FormattedMessage>
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.fee"></FormattedMessage>
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="homeheader.check-healthy"></FormattedMessage>
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="fas fa-question-circle"></i>{" "}
                <FormattedMessage id="homeheader.support"></FormattedMessage>
              </div>
              <div
                className={
                  curlanguage == "vi" ? "language-vi active" : "language-vi"
                }
              >
                <span onClick={() => this.hdlChangeLanguge("vi")}>VN</span>
              </div>
              <div>|</div>
              <div
                className={
                  curlanguage == "en" ? "language-en active" : "language-en"
                }
              >
                <span onClick={() => this.hdlChangeLanguge("en")}>EN</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="content-up">
            <div className="title1">
              <FormattedMessage id="banner.title1"></FormattedMessage>
            </div>
            <div className="title2">
              <FormattedMessage id="banner.title2"></FormattedMessage>
            </div>
            <div className="search">
              <i className="fas fa-search"></i>
              <input type="text" />
            </div>
          </div>
          <div className="content-down">
            <div className="options">
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-home"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.child1"></FormattedMessage>
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-home"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.child2"></FormattedMessage>
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-home"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.child3"></FormattedMessage>
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-home"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.child4"></FormattedMessage>
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-home"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.child5"></FormattedMessage>
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-home"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.child6"></FormattedMessage>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// Mỗi khi store update mapStateToProps sẽ được gọi, object mà nó trả về sẽ được merge với props của container.
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
    //user va app tu rootreducer(tong hop cac reducer)
  };
};

//map cac action method da dang ky voi reducers voi method cua component , de component nay dispatch(actionMethod)
const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageActionComMethod: (language) =>
      //call arrow function cua action
      //tuc la map changeLanguageActionComMethod method cua component hien tai
      //voi changeLanguageAction() method cua appActions
      dispatch(changeLanguageAction(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
