import React from 'react';
import $ from 'jquery';

class QCResponsibleOnly extends React.Component {

  render() {
    return (<div>
      QCResponsibleOnly :
      <input id="QCResponsibleOnly_id" type="checkbox" name="QCResponsibleOnly"></input>
    </div>);
  }
}

export {
  QCResponsibleOnly as default
}
