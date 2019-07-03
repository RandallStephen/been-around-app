import React from "react";
import Header from "./components/Header";
import JVectorMapApi from "./components/JVectorMapApi";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <JVectorMapApi />
      </React.Fragment>
    );
  }
}
