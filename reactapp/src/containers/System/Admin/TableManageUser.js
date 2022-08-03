import React, { Component } from "react";

import { connect } from "react-redux";
import "./TableManageUser.scss";
import * as actions from "../../../store/actions";

class TableManageUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userRedux: [],
    };
  }
  componentDidMount = () => {
    this.props.fetchUserRedux();
  };
  componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log("_________________TABLE MANAGE USER COMPONENTDIDUPDATE")
    if (prevProps.listUserRedux !== this.props.listUserRedux) {
      this.setState({
        userRedux: this.props.listUserRedux,
      });
    }
  };

  render() {
    console.log("_________________TABLE MANAGE USER RERENDER")
    let usersData = this.state.userRedux;
    return (
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {usersData &&
            usersData.length > 0 &&
            usersData.map((item, index) => {
              return (
                <tr key= {index}>
                  <td>{item.email}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.address}</td>

                  <td>
                    <button className="btn-edit">
                      <i className="fas fa-pencil-alt"></i>
                    </button>
                    <span> </span>
                    <button className="btn-delete">
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return { listUserRedux: state.admin.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserRedux: () => dispatch(actions.fetchAllUserStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
