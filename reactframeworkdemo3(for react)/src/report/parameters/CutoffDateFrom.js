import React from "react";
class CutoffDateFrom extends React.Component {
  render() {
    return (<div>
      <b>Cutoff Date(From):</b>
      <input type="Date" name="CutoffDateFrom"></input>
    </div>);
  }
}

export {
  CutoffDateFrom
  as default
}
