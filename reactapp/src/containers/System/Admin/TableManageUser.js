import React, { Component } from "react";

import { connect } from "react-redux";
import "./TableManageUser.scss";
import * as actions from "../../../store/actions";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
// import MdE

import "react-markdown-editor-lite/lib/index.css";

const mdParser = new MarkdownIt();
function handleEditorChange({ html, text }) {
  console.log("hdleEdittor change", html, text);
}
class TableManageUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userRedux: [],
    };
  }
  componentDidMount = () => {
    console.log("TABLEMANAGE DIDMOUT AND FETCH USER");
    this.props.fetchUserRedux();
  };
  componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log("_________________TABLE MANAGE USER COMPONENTDIDUPDATE");
    console.log(
      "________________>>>old list length:",
      prevProps.listUserRedux.length
    );
    if (prevProps.listUserRedux !== this.props.listUserRedux) {
      console.log(
        "________________>>>new list length:",
        this.props.listUserRedux.length
      );
      this.setState({
        userRedux: this.props.listUserRedux,
      });
    }
  };
  hdlDeleteUser = (id) => {
    this.props.deleteAUserRedux(id);
  };

  hdlEditUserInChild = (user) => {
    console.log("===================hdledit from child, ", user);
    this.props.hdlEditUser(user);
  };

  render() {
    console.log("_________________TABLE MANAGE USER RERENDER");
    let usersData = this.state.userRedux;
   
      return (
        <>
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
                <tr key={index}>
                  <td>{item.email}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.address}</td>

                  <td>
                    <button
                      onClick={() => this.hdlEditUserInChild(item)}
                      className="btn-edit"
                    >
                      <i className="fas fa-pencil-alt"></i>
                    </button>
                    <span> </span>
                    <button
                      onClick={() => this.hdlDeleteUser(item.id)}
                      className="btn-delete"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <MdEditor
        style={{ height: "500px" }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
      ></MdEditor>
      </>
      );
    
  }
}

const mapStateToProps = (state) => {
  console.log("TABLEMANAGE: Map list user to props");
  return { listUserRedux: state.admin.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserRedux: () => dispatch(actions.fetchAllUserStart()),
    deleteAUserRedux: (id) => dispatch(actions.deleteUserAction(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
