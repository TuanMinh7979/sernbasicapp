import React, { Component } from "react";

import { connect } from "react-redux";
import "./ManageDoctor.scss";
import * as actions from "../../../store/actions";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import languages from "../../../utils";

import Select from "react-select";
const options = [{ value: "chocolate", label: "sbv" }];
const mdParser = new MarkdownIt();

class ManageDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentMarkDown: "",
      contentHTML: "",
      selectedOption: "",
      description: "",
      allDoctor: [],
    };
  }

  componentDidMount = () => {
    this.props.fetchAllDoctor();
  };

  buildSelectData = (inpData) => {
    let result = [];
    let { language } = this.props;
    if (inpData && inpData.length > 0) {
      inpData.map((item, index) => {
        let obj = {};
        let labelVi = `${item.lastName} ${item.firstName}`;
        let labelEn = `${item.firstName} ${item.lastName}`;

        obj.label = language === "vi" ? labelVi : labelEn;
        obj.value = item.id;

        result.push(obj);
      });
    }
    console.log('BUILD SELECT DATA:  ',result)
    return result;
  };
  componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log("__________________________________________________");
    console.log("MANAGE DOCTOR DIDUPDATE PRESTATE", this.state);

    console.log("MANAGE DOCTOR DIDUPDATE PREPROP", prevProps);
    console.log("MANAGE DOCTOR DIDUPDATE PROP", this.props);
    if (prevProps.allDoctor !== this.props.allDoctor) {
      let dataSelect = this.buildSelectData(this.props.allDoctor);
      this.setState({
        allDoctor: dataSelect,
      });
    }

    if(prevProps.language !==this.props.language){
      let dataSelect = this.buildSelectData(this.props.allDoctor);
      this.setState({
        allDoctor: dataSelect,
      });
    }
  };

  hdlChangeDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };
  //selecteOption
  hdlChangeSelect = (selectedOption) => {
    this.setState({
      selectedOption: selectedOption,
    });
  };

  //edit change
  handleEditorChange = ({ html, text }) => {
    this.setState({
      contentMarkDown: html,
      contentHTML: text,
    });
  };
  //save editor button
  hdlSaveContentMarkDown = () => {
    console.log("MANAGE DOCTOR SAVE INFO ", this.state);
    this.props.saveDetailDoctor({
      contentHTML: this.state.contentHTML,
      contentMarkDown: this.state.contentMarkDown,
      description: this.state.description,
      doctorId: this.state.selectedOption.value,
    })
  };
  render() {
    console.log("MANAGEDOCTOR RENDER STATE", this.state);
    return (
      <div className="manage-doctor">
        <div className="manage-doctor-title" style={{ fontWeight: "bold" }}>
          Tao them thong tin bac sy
        </div>

        <div className="more-info row" style={{ display: "flex" , padding:"20px 50px"}}>
          <div className="content-left form-group" style={{ width: "40%" }}>
            <label> Chon bac sy</label>
            <Select
              value={this.state.selectedOption}
              onChange={this.hdlChangeSelect}
              options={this.state.allDoctor}
            ></Select>
          </div>
          <div className="content-right form-group" style={{ width: "60%" }}>
            <label>Thong tin gioi thieu</label>
            <textarea
              className="form-control"
              onChange={(event) => this.hdlChangeDescription(event)}
              value={this.state.description}
            ></textarea>
          </div>
        </div>
        <div className="manage-doctor-editor">
          <MdEditor
            style={{ height: "500px" }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={this.handleEditorChange}
          ></MdEditor>
        </div>
        <button
          onClick={() => this.hdlSaveContentMarkDown()}
          className="save-content-doctor"
        >
          LUU
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    allDoctor: state.admin.allDoctor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllDoctor: () => dispatch(actions.fetchAllDoctor()),
    saveDetailDoctor: (data)=>dispatch(actions.saveDetailDoctor(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
