import React from 'react';
import $ from 'jquery';

class MerchDepartment extends React.Component {
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
      type: 'get', url: './data/ajaxGetSelection.jsp?type=28', //./data/cx_Addr_MerchDepartment.jsp  ../data/Questionnaire.json
      dataType: "json",
      success: function(res) {
        let option = '';
        for (var i = 0; i < res.length; i++) {
          option += "<option value=" + res[i].dept_eid + " >" + res[i].dept_nm + "</option>";
          $("#MerchDepartment_id").html("<option ></option> " + option);
        }
      }
    })
  }
  getValue() {
    let MerchDepartmentName = $("#MerchDepartment_id")
      .find("option:selected")
      .text();
    $("#MerchDepartmentNM").attr("value", MerchDepartmentName);
  }
  render() {
    return (<div>
      Merch.Department :
      <select id="MerchDepartment_id" name="MerchDepartment" onChange={this.getValue}></select>
      <input type="hidden" name="MerchDepartmentNM" value="" id="MerchDepartmentNM"></input>
    </div>);
  }
}

export {
  MerchDepartment as default
}
