import React, { Component } from "react";
import { VectorMap } from "react-jvectormap";
import _ from "underscore";
import worldMapDataObject from "../worldMapDataObject.js";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

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
console.log("countriesDataObject: ", countriesDataObject);

class JVectorMapApi extends Component {
  state = {
    allData: countriesDataObject,
    selectedName: "",
    selectedCode: "",
    totalVisited: 0,
    focus: null // set this state to the map's scale on click
  };

  handleClick = (e, code) => {
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

  handleChangeDate = date => {
    const dateCode = this.state.selectedCode;
    this.setState(prevState => {
      const newState = {
        ...prevState,
        allData: { ...prevState.allData }
      };
      newState.allData[dateCode].dates = date;
      return newState;
    });
  };

  render() {
    console.log("Inside the Render function", this.state);

    const colors = _.mapObject(this.state.allData, (countryData, value) => {
      if (this.state.selectedCode === value) {
        return countryData.been ? "SelectedHasBeen" : "SelectedHasNotBeen";
      }
      return countryData.been ? "NotSelectedHasBeen" : "NotSelectedHasNotBeen";
    });
    // console.log(JSON.stringify(colors));

    // stops the lable from "sticking" on the screen
    if (this.refs.map) {
      this.refs.map.$mapObject.tip.remove();
    }

    return (
      <div className="container-fluid">
        <div style={{ width: "100%", height: 450 }}>
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
            // onViewportChange={this.handleScale}
            series={{
              regions: [
                {
                  values: colors,
                  attribute: "fill",
                  scale: {
                    NotSelectedHasBeen: "green",
                    NotSelectedHasNotBeen: "white",
                    SelectedHasBeen: "lightgreen",
                    SelectedHasNotBeen: "yellow"
                  }
                }
              ]
            }}
          />
        </div>

        <div style={{ display: this.state.selectedName ? "block" : "none" }}>
          <div className="card border-secondary m-1 pl-0">
            <div className="card-header">
              <h3>
                {this.state.selectedName}, {this.state.selectedCode}
              </h3>
            </div>
            <div className="card-body text-primary">
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
                  <label
                    className="custom-control-label"
                    htmlFor="customSwitch1"
                  >
                    I have been here
                  </label>
                </div>
                {this.state.selectedCode &&
                this.state.allData[this.state.selectedCode].been ? (
                  <div className="my-1">
                    <DateRangePicker
                      key={this.state.selectedCode}
                      value={
                        this.state.selectedCode
                          ? this.state.allData[this.state.selectedCode].dates
                          : null
                      }
                      onChange={this.handleChangeDate}
                    />
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JVectorMapApi;
