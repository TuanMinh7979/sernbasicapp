import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllCodeService } from "../../../services/userService";
import * as actions from "../../../store/actions";
class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArray: [],
    };
  }
  state = {};

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("RUN COMPOENNET DID UPDATE...");
    if (prevProps.genderRedux !== this.props.genderRedux) {
      this.setState({
        genderArray: this.props.genderRedux,
      });
    }
  }
  async componentDidMount() {
    this.props.getGenderStart();
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

  render() {
    let genders = this.props.genderRedux;
    console.log("RENDER and check props from redux", genders);
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
                <input type="email" className="form-control"></input>
              </div>
              <div className="col-3 ">
                <label>Password</label>
                <input type="password" className="form-control"></input>
              </div>
              <div className="col-3 ">
                <label>FirstName</label>
                <input type="text" className="form-control"></input>
              </div>
              <div className="col-3 ">
                <label>LastName</label>
                <input type="text" className="form-control"></input>
              </div>
              <div className="col-3 ">
                <label>Phong number</label>
                <input type="text" className="form-control"></input>
              </div>
              <div className="col-3 ">
                <label>Address</label>
                <input type="text" className="form-control"></input>
              </div>
              <div className="col-3 ">
                <label>RoleId</label>
                <select className="form-control">
                  {}
                  <option selected>Choose</option>
                  <option>Choose</option>
                </select>
              </div>
              <div className="col-3 ">
                <label>Gender</label>
                <select className="form-control">
                  {genders &&
                    genders.length > 0 &&
                    genders.map((item, index) => {
                      return (
                        <option key={index}>
                          {curLanguage == "vi" ? item.valueVi : item.valueEn}
                        </option>
                      );
                    })}
                </select>
              </div>

              <div className="col-3">
                <label>Image</label>
                <input type="text" />
              </div>

              <div className="col-12 my-3">
                <button className="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genderRedux: state.admin.genders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
