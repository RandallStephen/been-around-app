import React, { Component } from "react";
import { VectorMap } from "react-jvectormap";
import _ from "underscore";
import worldMapDataObject from "../worldMapDataObject.js";
// import worldMapDataArray from "../worldMapDataArray.js";
// import DateRangePicker from "@wojtekmaj/react-daterange-picker";

// const countryListArray = worldMapDataArray;
// const countriesDataArray = [...countryListArray];

const countryListObject = worldMapDataObject;
const countryCodes = Object.keys(countryListObject); // convert the country codes into an array
const countriesDataObject = {};

// creates Object to access country data by Country Code
for (var code of countryCodes) {
  countriesDataObject[code] = {
    name: countryListObject[code],
    been: false,
    color: 0,
    dates: [null, null]
  };
}
console.log(countriesDataObject);

const countriesVisited = {};
for (const country of countryCodes) {
  countriesVisited[country] = false;
}

class JVectorMapApi extends Component {
  state = {
    allData: countriesDataObject,
    selectedName: "",
    selectedCode: "",
    haveBeen: countriesVisited
  };

  componentDidMount() {
    console.log(this.state);
  }

  handleClick = (e, code) => {
    // this.refs.map.$mapObject.tip.hide(); // stops the lable from "sticking" on the screen
    const countryName = countryListObject[code];
    const countryCode = code;
    this.setState(prevState => ({
      ...prevState,
      selectedName: countryName,
      selectedCode: countryCode
    }));
  };

  handleCheckbox = event => {
    const { name, checked } = event.target; // name is the country code
    this.setState(prevState => {
      const newState = {
        ...prevState,
        allData: { ...prevState.allData }
      };
      newState.allData[name].been = checked;
      console.log(newState);
      return newState;
    });
  };

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
    console.log("Render");
    const colors = _.mapObject(this.state.allData, (countryData, value) => {
      if (this.state.selectedCode === value) {
        return "Selected";
      }
      return countryData.been ? "HasBeen" : "HasNotBeen";
    });
    // console.log(JSON.stringify(colors));
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
          series={{
            regions: [
              {
                values: colors,
                attribute: "fill",
                scale: {
                  HasBeen: "green",
                  HasNotBeen: "white",
                  Selected: "yellow"
                }
              }
            ]
          }}
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
                checked={
                  this.state.allData[this.state.selectedCode]
                    ? this.state.allData[this.state.selectedCode].been
                    : false
                }
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
