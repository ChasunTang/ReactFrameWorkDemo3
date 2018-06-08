import React from 'react';
import $ from 'jquery';

class Customer extends React.Component {
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
      type: 'get', url: './data/ajaxGetSelection.jsp?type=15', //./data/cx_Addr_Customer.jsp  ../data/Questionnaire.json
      dataType: "json",
      success: function(res) {
        let option = '';
        for (var i = 0; i < res.length; i++) {
          option += "<option value=" + res[i].addr_corp_eid + " >" + res[i].corp_nm + "</option>";
          $("#Customer_id").html("<option ></option> " + option);
        }
      }
    })
  }
  getValue() {
    let CustomerName = $("#Customer_id")
      .find("option:selected")
      .text();
    $("#CustomerNM").attr("value", CustomerName);
  }
  render() {
    return (<div>
      Customer :
      <select id="Customer_id" name="Customer" onChange={this.getValue}></select>
      <input type="hidden" name="CustomerNM" value="" id="CustomerNM"></input>
    </div>);
  }
}

export {
  Customer as default
}
