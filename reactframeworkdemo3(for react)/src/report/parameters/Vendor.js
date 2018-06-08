import React from 'react';
import $ from 'jquery';

class Vendor extends React.Component {
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
      type: 'get', url: './data/ajaxGetSelection.jsp?type=7', //./data/cx_Addr_Vendor.jsp  ../data/Questionnaire.json
      dataType: "json",
      success: function(res) {
        let option = '';
        for (var i = 0; i < res.length; i++) {
          option += "<option value=" + res[i].addr_vndr_eid + " >" + res[i].addr_vndrabbr_nm + "</option>";
          $("#Vendor_id").html("<option ></option> " + option);
        }
      }
    })
  }
  getValue() {
    let VendorName = $("#Vendor_id")
      .find("option:selected")
      .text();
    $("#VendorNM").attr("value", VendorName);
  }
  render() {
    return (<div>
      Vendor :
      <select id="Vendor_id" name="Vendor" onChange={this.getValue}></select>
      <input type="hidden" name="VendorNM" value="" id="VendorNM"></input>
    </div>);
  }
}

export {
  Vendor as default
}
