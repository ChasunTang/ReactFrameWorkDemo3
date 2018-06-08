import React from 'react';
import $ from 'jquery';

class BuyerDepartment extends React.Component {
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
      type: 'get', url: './data/ajaxGetSelection.jsp?type=104', //./data/cx_Addr_BuyerDepartment.jsp  ../data/Questionnaire.json
      dataType: "json",
      success: function(res) {
        let option = '';
        for (var i = 0; i < res.length; i++) {
          option += "<option value=" + res[i].dept_eid + " >" + res[i].dept_nm + "</option>";
          $("#BuyerDepartment_id").html("<option ></option> " + option);
        }
      }
    })
  }
  getValue() {
    let BuyerDepartmentName = $("#BuyerDepartment_id")
      .find("option:selected")
      .text();
    $("#BuyerDepartmentNM").attr("value", BuyerDepartmentName);
  }
  render() {
    return (<div>
      Buyer Department :
      <select id="BuyerDepartment_id" name="BuyerDepartment"></select>
      <input type="hidden" name="BuyerDepartmentNM" value="" id="BuyerDepartmentNM"></input>
    </div>);
  }
}

export {
  BuyerDepartment as default
}
