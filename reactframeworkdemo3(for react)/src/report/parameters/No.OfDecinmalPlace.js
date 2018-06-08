import React from 'react';
import $ from 'jquery';

class NoOfDecinmalPlace extends React.Component {

  render() {
    return (<div>
      <b>No of Decinmal Place :</b>
      <input id="NoOfDecinmalPlace" name="NoOfDecinmalPlace" type="text"></input>
    </div>);
  }
}

export {
  NoOfDecinmalPlace as default
}
