import React, { Component } from "react";
class exam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      clickedStatus: false,
      list: [],
    };
  }
  componentWillMount() {
    console.log("Component will mount!");
  }
  componentDidMount() {
    console.log("Component did mount!");
    this.getList();
  }
  getList = () => {
    //  /*** method to make api call***

    fetch("http://localhost:8989/api/allcode?type=gender")
      .then((response) => response.json())
      .then((data) => {
        console.log("BF SETSTATE");
        this.setState({ list: data });
        console.log("AFTER SETSTATE");
      });
  };
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.list !== nextState.list;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Component will update!");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update!");
  }
  render() {
    console.log("RENDER........................><><><><><>")
    return (
      <div>
        <h3>Hello Mounting Lifecycle Methods!</h3>
      
      </div>
    );
  }
}
export default exam;
