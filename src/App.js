import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Map, Marker, InfoWindow } from "google-maps-react";
import Start from './Start';
import End from './End';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

        <Map google={window.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={'Current location'} />
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
                    <Start />
          <End />
          </div>
        </InfoWindow>
        </Map>
        </div>
      </div>
    );
  }
}

export default App;
