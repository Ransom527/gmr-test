import React, { Component } from 'react'

class End extends Component {
  render() {
    return (
      <div className="End">
      	<b>End: </b>
    	<select id="End">
      		<option value="chicago, il">Chicago</option>
      		<option value="st louis, mo">St Louis</option>
      		<option value="joplin, mo">Joplin, MO</option>
      		<option value="oklahoma city, ok">Oklahoma City</option>
      		<option value="amarillo, tx">Amarillo</option>
      		<option value="gallup, nm">Gallup, NM</option>
      		<option value="flagstaff, az">Flagstaff, AZ</option>
      		<option value="winona, az">Winona</option>
      		<option value="kingman, az">Kingman</option>
      		<option value="barstow, ca">Barstow</option>
      		<option value="san bernardino, ca">San Bernardino</option>
      		<option value="los angeles, ca">Los Angeles</option>
    	</select>
      </div>
    );
  }
}

export default End;