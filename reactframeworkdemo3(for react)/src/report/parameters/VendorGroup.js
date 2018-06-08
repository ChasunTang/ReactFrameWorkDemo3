import React from 'react';
import $ from 'jquery';

class VendorGroup extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: {}
    };

  }
  componentDidMount() {
    $.ajax({
      type: 'get', url: './data/ajaxGetSelection.jsp?type=74', //./data/cx_Addr_VendorGroup.jsp  ../data/Questionnaire.json
      dataType: "json",
      success: function(res) {
        let option = '';
        for (var i = 0; i < res.length; i++) {
          option += "<option value=" + res[i].vgp_eid + " >" + res[i].vgp_nm + "</option>";
          $("#VendorGroup_id").html("<option ></option> " + option);
        }
      }
    })
  }
  getValue() {
    let VendorGroupName = $("#VendorGroup_id")
      .find("option:selected")
      .text();
    $("#VendorGroupNM").attr("value", VendorGroupName);
  }
  render() {
    return (<div>
      Vendor Group :
      <select id="VendorGroup_id" name="VendorGroup" onChange={this.getValue}></select>
      <input type="hidden" name="VendorGroupNM" value="" id="VendorGroupNM"></input>
    </div>);
  }
}

export {
  VendorGroup as default
}
