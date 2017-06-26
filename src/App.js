import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Map, Marker, InfoWindow } from "google-maps-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <Map google={window.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={'Current location'} />
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
          <h1></h1>
          </div>
        </InfoWindow>
        </Map>
        </div>
      </div>
    );
  }
}

export default App;
