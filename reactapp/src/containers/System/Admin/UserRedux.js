import React, { Component, useReducer } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllCodeService } from "../../../services/userService";
import * as actions from "../../../store/actions";
import "./UserRedux.scss";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import TableManageUser from "./TableManageUser";
import { CRUD_ACTIONS, CommonUtils } from "../../../utils";
import { isBuffer, isError } from "lodash";

class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArray: [],
      positionArray: [],
      roleArray: [],
      previewImgUrl: "",
      isOpen: false,
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      gender: "",
      position: "",
      role: "",
      avatar: "",
      userId: "",
      action: "",
    };
  }
  state = {};

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(".....USER REDUX COMPONENT DID UPDATE DUOC GOI");
    if (prevProps.genderRedux !== this.props.genderRedux) {
      console.log("vao 1");
      let arrGender = this.props.genderRedux;
      this.setState({
        genderArray: this.props.genderRedux,
        gender: arrGender && arrGender.length > 0 ? arrGender[0].keyMap : "",
      });
    }
    if (prevProps.positionRedux !== this.props.positionRedux) {
      console.log("vao 2");
      let arrPosition = this.props.positionRedux;
      this.setState({
        positionArray: this.props.positionRedux,
        position:
          arrPosition && arrPosition.length > 0 ? arrPosition[0].keyMap : "",
      });
    }
    if (prevProps.roleRedux !== this.props.roleRedux) {
      console.log("vao 3");
      let arrRole = this.props.roleRedux;

      this.setState({
        roleArray: this.props.roleRedux,
        role: arrRole && arrRole.length > 0 ? arrRole[0].keyMap : "",
      });
    }

    if (prevProps.listUserRedux !== this.props.listUserRedux) {
      console.log("vao 4");
      this.setState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: "",
        gender: "",
        position: "",
        role: "",
        avatar: "",
        action: CRUD_ACTIONS.CREATE,
        previewImgUrl: "",
      });
    }
  }
  componentDidMount() {
    console.log("USERREDUX DIDMOUNT GENDERPOSITONADNNROLE");
    this.props.getGenderStart();
    this.props.getPositionsStart();
    this.props.getRolesStart();
    // try {
    //   let res = await getAllCodeService("gender");
    //   console.log(res);
    //   if (res) {
    //     this.setState({
    //       genderArray: res.data,
    //     });
    //   }
    // } catch (e) {}
  }

  hdlOnChangeImage = async (event) => {
    let file = event.target.files[0];
    if (file) {
      let base64file = await CommonUtils.getBase64(file);
      console.log("__________________BASE 64 IMAGE", base64file);
      let objectURL = URL.createObjectURL(file);

      this.setState({
        previewImgUrl: objectURL,
        avatar: base64file,
      });
    }
  };

  openLightbox = () => {
    if (!this.state.previewImgUrl) return;
    this.setState({
      isOpen: true,
    });
  };

  onChangeInput = (event, id) => {
    let cpState = { ...this.state };
    cpState[id] = event.target.value;
    this.setState(
      {
        ...cpState,
      },
      () => {
        console.log(
          ">>>CB onchage inp hoi dan it checkinput onchange",
          this.state
        );
      }
    );
  };
  hdlSaveUser = () => {
    let { action } = this.state;
    console.log("State:  create user:", this.state);
    if (action === CRUD_ACTIONS.CREATE) {
      this.props.createUserRedux({
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        phoneNumber: this.state.phoneNumber,
        gender: this.state.gender,
        roleId: this.state.role,
        positionId: this.state.position,
        avatar: this.state.avatar,
      });
    } else if (action === CRUD_ACTIONS.UPDATE) {
      console.log(
        "/////////////////////UPDATE USER REDUX_______________.......id in state:::",
        this.state
      );

      console.log(this.state.role)
      console.log(this.state.position)
      this.props.updateUserRedux({
        id: this.state.userId,
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        phoneNumber: this.state.phoneNumber,
        gender: this.state.gender,
        roleId: this.state.role,
        positionId: this.state.position,
        avatar: this.state.avatar,
      });
    }
  };



  hdlEditUser = (user) => {
    console.log("update user  info in pareeet: ,", user);
    let imageBase64 = "";
    if (user.image) {
      imageBase64 = new Buffer(user.image, "base64").toString("binary");
    }

    this.setState({
      email: user.email,
      password: "hardcode",
      firstName: user.firstName,
      lastName: user.lastName,
      address: user.address,
      phoneNumber: user.phoneNumber,
      gender: user.gender,
      role: user.roleId,
      position: user.positionId,

      avatar: "",
      action: CRUD_ACTIONS.UPDATE,
      userId: user.id,
      previewImgUrl: imageBase64,
    });
  };
  render() {
    console.log(".....USER REDUX REREDNER");
    let genders = this.state.genderArray;
    let positions = this.state.positionArray;
    let roles = this.state.roleArray;

    let {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      address,
      gender,
      position,
      role,
      avatar,
    } = this.state;
    let curLanguage = this.props.language;
    return (
      <div className="user-redux-content">
        <div className="title">User redux hoi dan it</div>
        <div className="user-redux-body">
          <div className="container">
            <div className="row">
              <div className="col-12 my-3">Add user</div>
              <div className="col-3 ">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(event) => this.onChangeInput(event, "email")}
                ></input>
              </div>
              <div className="col-3 ">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(event) => this.onChangeInput(event, "password")}
                ></input>
              </div>
              <div className="col-3 ">
                <label>FirstName</label>
                <input
                  type="text"
                  className="form-control"
                  value={firstName}
                  onChange={(event) => this.onChangeInput(event, "firstName")}
                ></input>
              </div>
              <div className="col-3 ">
                <label>LastName</label>
                <input
                  type="text"
                  className="form-control"
                  value={lastName}
                  onChange={(event) => this.onChangeInput(event, "lastName")}
                ></input>
              </div>
              <div className="col-3 ">
                <label>Phone number</label>
                <input
                  type="text"
                  className="form-control"
                  value={phoneNumber}
                  onChange={(event) => this.onChangeInput(event, "phoneNumber")}
                ></input>
              </div>
              <div className="col-3 ">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  value={address}
                  onChange={(event) => this.onChangeInput(event, "address")}
                ></input>
              </div>
              <div className="col-3 ">
                <label>Position</label>
                <select
                  value={position}
                  className="form-control"
                  onChange={(event) => this.onChangeInput(event, "position")}
                >
                  {positions &&
                    positions.length > 0 &&
                    positions.map((item, index) => {
                      return (
                        <option key={index} value={item.keyMap}>
                          {curLanguage === "vi" ? item.valueVi : item.valueEn}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="col-3 ">
                <label>RoleId</label>
                <select
                  className="form-control"
                  value={role}
                  onChange={(event) => this.onChangeInput(event, "role")}
                >
                  {roles &&
                    roles.length > 0 &&
                    roles.map((item, index) => {
                      return (
                        <option key={index} value={item.keyMap}>
                          {curLanguage == "vi" ? item.valueVi : item.valueEn}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="col-3 ">
                <label>Gender</label>
                <select
                  value={gender}
                  className="form-control"
                  onChange={(event) => this.onChangeInput(event, "gender")}
                >
                  {genders &&
                    genders.length > 0 &&
                    genders.map((item, index) => {
                      return (
                        <option key={index} value={item.keyMap}>
                          {curLanguage === "vi" ? item.valueVi : item.valueEn}
                        </option>
                      );
                    })}
                </select>
              </div>

              <div className="col-3">
                <label>Image</label>
                <div className="preview-img-container">
                  <input
                    onChange={(event) => this.hdlOnChangeImage(event)}
                    id="previewImg"
                    type="file"
                    hidden
                  ></input>
                  <label className="label-upload" htmlFor="previewImg">
                    Tai anh len:
                    <i className="fas fa-upload"></i>
                  </label>
                  <div
                    className="preview-image"
                    style={{
                      backgroundImage: `url(${this.state.previewImgUrl})`,
                    }}
                    onClick={() => this.openLightbox()}
                  ></div>
                </div>
              </div>

              <div className="col-12 my-3">
                <button
                  className={
                    this.state.action === CRUD_ACTIONS.UPDATE
                      ? "btn btn-warning"
                      : "btn btn-primary"
                  }
                  onClick={() => this.hdlSaveUser()}
                >
                  Save
                </button>
              </div>
              <div className="col-12">
                <TableManageUser
                  hdlEditUser={this.hdlEditUser}
                  action={this.state.action}
                ></TableManageUser>
              </div>
            </div>
          </div>
        </div>

        {this.state.isOpen === true && (
          <Lightbox
            mainSrc={this.state.previewImgUrl}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("USER REDUX: Map list user to props");
  return {
    language: state.app.language,
    genderRedux: state.admin.genders,
    positionRedux: state.admin.positions,
    roleRedux: state.admin.roles,
    listUserRedux: state.admin.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
    getPositionsStart: () => dispatch(actions.fetchPositionStart()),
    getRolesStart: () => dispatch(actions.fetchRoleStart()),
    createUserRedux: (data) => dispatch(actions.createUserAction(data)),
    fetchUserRedux: () => dispatch(actions.fetchAllUserStart()),
    updateUserRedux: (data) => dispatch(actions.EditUserAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
