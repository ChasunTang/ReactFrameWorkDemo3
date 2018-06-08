import React from 'react';
import $ from 'jquery';

class Season extends React.Component {
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
      type: 'get', url: './data/ajaxGetSelection.jsp?type=148', //./data/cx_Addr_Agent.jsp  ../data/Questionnaire.json
      dataType: "json",
      success: function(res) {
        let option = '';
        for (var i = 0; i < res.length; i++) {
          option += "<option value=" + res[i].sea_eid + " >" + res[i].sea_abbr_nm + "</option>";
          $("#Season").html("<option ></option> " + option);
        }
      }
    })
  }
  getValue() {
    let SeasonName = $("#Season")
      .find("option:selected")
      .text();
    $("#SeasonNM").attr("value", SeasonName);
  }
  render() {
    return (<div>
      Season :
      <select id="Season" name="Season" onChange={this.getValue}></select>
      <input type="hidden" name="SeasonNM" value="" id="SeasonNM"></input>
    </div>);
  }
}

export {
  Season as default
}
