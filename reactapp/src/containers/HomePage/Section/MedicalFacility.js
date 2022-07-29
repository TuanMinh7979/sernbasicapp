import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class MedicalFacility extends Component {
  render() {
    return (
      <div>
       medical MedicalFacility
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
