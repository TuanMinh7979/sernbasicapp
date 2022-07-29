import React, { Component } from "react";
import { connect } from "react-redux";

import Navigator from "../../components/Navigator";
import { adminMenu } from "./menuApp";
import "./Header.scss";
import * as actions from "../../store/actions";
import { changeLanguageAction } from "../../store/actions";
import { FormattedMessage } from "react-intl";
class Header extends Component {
  hdlChangeLanguage = (newLanguage) => {
    this.props.changeLanguageActionComMethod(newLanguage);
  };
  render() {
    const { processLogout, curLanguage, userInfo } = this.props;
    console.log(userInfo);
    return (
      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-tabs-container">
          <Navigator menus={adminMenu} />
        </div>
        <div className="header-right">
          <span className="welcome">
            <FormattedMessage id="homeheader.welcome"></FormattedMessage>
            <span>, </span>
            {userInfo && userInfo.firstName ? userInfo.firstName : ""}
            {userInfo.lastName ? userInfo.lastName : ""}
          </span>
          <span
            className={
              curLanguage == "vi" ? "language-vi active" : "language-vi"
            }
            onClick={() => this.hdlChangeLanguage("vi")}
          >
            VN
          </span>
          <span
            className={
              curLanguage == "en" ? "language-en active" : "language-en"
            }
            onClick={() => this.hdlChangeLanguage("en")}
          >
            EN
          </span>
          <div className="btn btn-logout" onClick={processLogout}>
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>

        {/* nút logout */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    curLanguage: state.app.language,
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    changeLanguageActionComMethod: (language) =>
      //call arrow function cua action
      //tuc la map changeLanguageActionComMethod method cua component hien tai
      //voi changeLanguageAction() method cua appActions
      dispatch(changeLanguageAction(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
