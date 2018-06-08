import React from 'react';
import $ from 'jquery';

class Business extends React.Component {
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
      type: 'get', url: './data/ajaxGetSelection.jsp?type=9', //./data/cx_Addr_Business.jsp  ../data/Questionnaire.json
      dataType: "json",
      success: function(res) {
        let option = '';
        for (var i = 0; i < res.length; i++) {
          option += "<option value=" + res[i].bus_id + " >" + res[i].bus_abbr_nm + "</option>";
          $("#Business_id").html("<option></option> " + option);
        }
      }
    })
  }
  getValue() {
    let BusinessName = $("#Business_id")
      .find("option:selected")
      .text();
    $("#BusinessNM").attr("value", BusinessName);
  }
  render() {
    return (<div>
      Business :
      <select id="Business_id" name="Business" onChange={this.getValue}></select>
      <input type="hidden" name="BusinessNM" value="" id="BusinessNM"></input>
      <div id="error">
        <p></p>
      </div>
    </div>);
  }
}

export {
  Business as default
}
