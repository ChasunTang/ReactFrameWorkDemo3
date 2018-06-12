import React, {Component} from "react";
import ParametersSlection from "./parameters/ParametersSlection"
class MGT2063 extends Component {
  render() {
    return (<div className="report">
      <ParametersSlection TypeId="AgentId" TypeName="AgentName" TypeShow="Agent"/>
      <ParametersSlection TypeId="aa" TypeName="bb" TypeShow="cc"/>
    </div>);
  }
}

export default MGT2063;
