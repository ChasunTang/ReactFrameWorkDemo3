import React, {Component} from 'react';
import $ from "jquery";
class ParametersSlection extends Component {

  render() {
    let eid = this.props.TypeId;
    let ename = this.props.TypeName;
    let showName = this.props.TypeShow;
    let showName2;
    $.ajax({
      url: "./data/Values.json?eid=" + eid,
      dataType: "json",
      success: function(v) {
        let url = v[0].url;
        let type = v[0].type;
        let parametereid = v[0].parametereid;
        let parameterName = v[0].parameterName;
        let eid2 = "#" + eid;
        showName2 = v[0].name;
        $.ajax({
          url: url + type,
          dataType: "json",
          success: function(res) {
            let option;
            for (var j = 0; j < res.length; j++) {
              option += "<option value=" + res[j][parametereid] + " >" + res[j][parameterName] + "</option>";
              $(eid2).html(option);
              let selectName = $(eid2)
                .find("option:selected")
                .text();
              $("#" + ename).attr("value", selectName);
            }
          }
        })
      }
    });

    return (<div>
      {showName}:
      <select id={eid} name={eid} onChange={this.getValue}></select>
      <input type="hidden" name={ename} id={ename}></input>
    </div>);
  }
}

export default ParametersSlection;
