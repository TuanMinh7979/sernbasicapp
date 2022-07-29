import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class HomeFooter extends Component {
  render() {
    return <div id="homeFooter">
        <p>&copy; 2022 hoidanitvoieric</p>
    </div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
