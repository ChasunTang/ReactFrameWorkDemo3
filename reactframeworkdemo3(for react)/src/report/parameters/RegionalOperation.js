import React from 'react';
import $ from 'jquery';

class RegionalOperation extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: {}
    };
    this.get = this
      .getValue
      .bind(this);
  }
  componentDidMount() {
    $.ajax({
      type: 'get', url: './data/ajaxGetSelection.jsp?type=92', //./data/cx_Addr_RegionalOperation.jsp  ../data/Questionnaire.json
      dataType: "json",
      success: function(res) {
        let option = '';
        for (var i = 0; i < res.length; i++) {
          option += "<option value=" + res[i].dept_regiono_eid + " >" + res[i].dept_regiono_nm + "</option>";
          $("#RegionalOperation_id").html("<option ></option> " + option);
        }
      }
    })
  }
  getValue() {
    let RegionalOperationName = $("#RegionalOperation_id")
      .find("option:selected")
      .text();
    $("#RegionalOperationNM").attr("value", RegionalOperationName);
  }
  render() {
    return (<div>
      Regional Operation :
      <select id="RegionalOperation_id" name="RegionalOperation" onChange={this.getValue}></select>
      <input type="hidden" name="RegionalOperationNM" value="" id="RegionalOperationNM"></input>
    </div>);
  }
}

export {
  RegionalOperation as default
}
