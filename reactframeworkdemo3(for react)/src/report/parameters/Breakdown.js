import React from 'react';
import $ from 'jquery';

class Breakdown extends React.Component {

  render() {
    return (<div>
      w/breakdown :
      <input id="Breakdown_id" name="WBreakdown" type="checkbox" checked="defaultChecked"></input>
    </div>);
  }
}

export {
  Breakdown as default
}
