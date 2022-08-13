import React, { Component } from "react";

import { connect } from "react-redux";
import "./ManageDoctor.scss";
import * as actions from "../../../store/actions";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";

import Select from "react-select";
const options = [{ value: "chocolate", label: "sbv" }];
const mdParser = new MarkdownIt();

class ManageDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentMarkdown: "",
      contentHTML: "",
      selectedOption: "",
      description: "",
    };
  }

  componentDidMount = () => {};
  componentDidUpdate = (prevProps, prevState, snapshot) => {};

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
      contentMarkdown: html,
      contentHTML: text,
    });
  };
  //save editor button
  hdlSaveContentMarkDown = () => {
    console.log("check state ", this.state);
  };
  render() {
    return (
      <div classManage="manage-doctor">
        <div className="manage-doctor-title" style={{ fontWeight: "bold" }}>
          Tao them thong tin bac sy
        </div>

        <div className="more-info row" style={{ display: "flex" }}>
          <div className="content-left form-group" style={{ width: "40%" }}>
            <label> Chon bac sy</label>
            <Select
              value={this.state.selectedOption}
              onChange={ this.hdlChangeSelect}
              options={options}
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
            onChange={ this.handleEditorChange}
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
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
