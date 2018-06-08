import React from 'react';
import $ from 'jquery';

class InclOfficeBreakdown extends React.Component {

  render() {
    return (<div>
      Incl.Office Breakdown :
      <input id="InclOfficeBreakdown_id" name="InclOfficeBreakdown" type="checkbox" checked="defaultChecked"></input>

    </div>);
  }
}

export {
  InclOfficeBreakdown as default
}
