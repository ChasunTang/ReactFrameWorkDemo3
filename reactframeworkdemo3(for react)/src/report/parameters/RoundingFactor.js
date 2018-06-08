import React from 'react';
import $ from 'jquery';

class RoundingFactor extends React.Component {

  render() {
    return (<div>
      <b>Rounding Factor :</b>
      <input id="RoundingFactor" name="RoundingFactor" type="text"></input>
    </div>);
  }
}

export {
  RoundingFactor as default
}
