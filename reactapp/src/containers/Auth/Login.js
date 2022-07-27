import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import "./Login.scss";

import { hdlLoginApi } from "../../services/userService";
import { userLoginSuccess } from "../../store/actions";
class Login extends Component {
  constructor(props) {
    super(props);
    this.btnLogin = React.createRef();
    this.state = {
      username: "",
      password: "",
      isShowPw: false,
      errMessage: "",
    };
  }

  hdlShowHidePw = () => {
    this.setState({
      isShowPw: !this.state.isShowPw,
    });
  };
  hdlOnChangeInput = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  hdlOnChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  hdlLoginBtn = async () => {
    this.setState({
      errMessage: "",
    });
    try {
      let ares = await hdlLoginApi(this.state.username, this.state.password);
      let userInfo = ares.data.userData;

      this.props.userLoginSuccess(userInfo);
    } catch (e) {
      console.log(
        "_____________Co loi xay ra tuc status !== 200 se di vao khoi catch nay"
      );
      // console.log(e.response.data.errMessage);
      console.log(e);
      this.setState({
        
        errMessage: e.response.data.errMessage,
      });
    }
  };

  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-login">Login</div>
            <div className="col-12 form-group login-input">
              <label>UserName</label>
              <input
                value={this.state.username}
                type="text"
                className="form-control"
                name="username"
                onChange={(event) => this.hdlOnChangeInput(event)}
              ></input>
            </div>
            <div className="col-12 form-group login-input">
              <label>Password</label>
              <div className="custom-input-password">
                <input
                  name="password"
                  value={this.state.password}
                  type={this.state.isShowPw ? "text" : "password"}
                  className="form-control"
                  onChange={(event) => this.hdlOnChangePassword(event)}
                ></input>
                <span onClick={() => this.hdlShowHidePw()}>
                  <i
                    className={
                      this.state.isShowPw ? "far fa-eye" : "far fa-eye-slash"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div style={{ color: "red" }}> {this.state.errMessage}</div>
            <div>
              <button className="btn-login" onClick={() => this.hdlLoginBtn()}>
                {" "}
                Login
              </button>
            </div>
            <div>
              <span className="forgot-password">Forgot your password</span>
            </div>
            <div className="text-center mt-3">
              <span className="text-other-login">Or login with</span>
            </div>

            <div className="social-login">
              <i className="fab fa-google-plus-g google"></i>
              <i className="fab fa-facebook-f facebook"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    // userLoginFail: () => dispatch(actions.adminLoginFail()),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// export default Login;
