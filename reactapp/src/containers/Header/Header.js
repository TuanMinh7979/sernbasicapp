import React, { Component } from "react";
import { connect } from "react-redux";

import Navigator from "../../components/Navigator";
import { adminMenu } from "./menuApp";
import "./Header.scss";
import * as actions from "../../store/actions";
import { changeLanguageAction } from "../../store/actions";

class Header extends Component {
  hdlChangeLanguage = (newLanguage) => {
    this.props.changeLanguageActionComMethod(newLanguage);
  };
  render() {
    const { processLogout, curLanguage } = this.props;

    return (
      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-tabs-container">
          <Navigator menus={adminMenu} />
        </div>
        <div className="header-right">
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
