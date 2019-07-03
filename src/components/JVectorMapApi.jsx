import React, { Component } from "react";
import { VectorMap } from "react-jvectormap";
import worldMapDataObject from "../worldMapDataObject.js";
// import DateRangePicker from "@wojtekmaj/react-daterange-picker";

const countryList = worldMapDataObject;
// console.log(countryList);

// convert the country codes into an array
const countryCodes = Object.keys(countryList);

// set an object of Codes to false, 0, null dates
const countriesVisited = {};
const countriesVisitedColor = {}; // these should all be combined into one
const countriesVisitedDates = {};
for (const country of countryCodes) {
  countriesVisited[country] = false;
  countriesVisitedColor[country] = 0;
  countriesVisitedDates[country] = [null, null];
}
// console.log(countriesVisitedColor);

class JVectorMapApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedName: "",
      selectedCode: "",
      haveBeen: countriesVisited,
      haveBeenColor: countriesVisitedColor,
      date: countriesVisitedDates
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    // this.handleChangeDate = this.handleChangeDate.bind(this);
  }

  handleClick(e, code) {
    // console.log(code, countryList[code]);
    this.refs.map.$mapObject.tip.hide(); // stops the lable from "sticking" on the screen
    const countryName = countryList[code];
    const countryCode = code;
    this.setState({
      selectedName: countryName,
      selectedCode: countryCode
    });
  }

  handleCheckbox(event) {
    const { name, checked } = event.target;
    this.setState(prevState => {
      return {
        haveBeen: {
          ...prevState.haveBeen,
          [name]: checked
        }
      };
    });
    // console.log(this.state.haveBeenColor);
  }

  // handleChangeDate(date) {
  //   const dateCode = this.state.selectedCode;
  //   this.setState(prevState => {
  //     return {
  //       date: {
  //         ...prevState.date,
  //         [dateCode]: date
  //       }
  //     };
  //   });
  // }

  render() {
    return (
      <div style={{ width: "100%", height: 500 }} className="container-fluid">
        <VectorMap
          map={"world_mill"}
          backgroundColor="#3b96ce"
          regionsSelectable={true}
          regionsSelectableOne={true}
          ref="map"
          containerStyle={{
            width: "100%",
            height: "100%"
          }}
          containerClassName="map"
          onRegionClick={this.handleClick}
          // series={{
          //   regions: [
          //     {
          //       values: countriesVisited,
          //       attribute: "fill",
          //       scale: {
          //         1: "green",
          //         0: "white"
          //       }
          //     }
          //   ]
          // }}
        />
        <div
          style={{ display: this.state.selectedName ? "block" : "none" }}
          className="container-fluid"
        >
          <h2>
            {this.state.selectedName}, {this.state.selectedCode}
          </h2>
          <form>
            <div className="custom-control custom-switch">
              <input
                type="checkbox"
                id="customSwitch1"
                className="custom-control-input"
                key={this.state.selectedCode}
                name={this.state.selectedCode}
                checked={this.state.haveBeen[this.state.selectedCode]}
                onChange={this.handleCheckbox}
              />
              <label className="custom-control-label" htmlFor="customSwitch1">
                I have been here
              </label>
            </div>
            {/* <DateRangePicker
              key={this.state.selectedCode}
              value={this.state.date[this.state.selectedCode]}
              onChange={this.handleChangeDate}
            /> */}
          </form>
        </div>
      </div>
    );
  }
}

export default JVectorMapApi;
