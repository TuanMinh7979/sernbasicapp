import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
class ProductManage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className="user-redux-content">
        <div className="title">User redux hoi dan it</div>
        <div className="user-redux-body">
          <div>Them moi nguoi dung</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
