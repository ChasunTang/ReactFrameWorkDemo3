import React from 'react';
import $ from 'jquery';

class CountryOfOrigin extends React.Component {
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
      type: 'get', url: './data/ajaxGetSelection.jsp?type=19', //./data/cx_Addr_CountryOfOrigin.jsp  ../data/Questionnaire.json
      dataType: "json",
      success: function(res) {
        let option = '';
        for (var i = 0; i < res.length; i++) {
          option += "<option value=" + res[i].cntry_cd + " >" + res[i].cntry_nm + "</option>";
          $("#CountryOfOrigin_id").html("<option ></option> " + option);
        }
      }
    })
  }
  getValue() {
    let CountryOfOriginName = $("#CountryOfOrigin_id")
      .find("option:selected")
      .text();
    $("#CountryOfOriginNM").attr("value", CountryOfOriginName);
  }
  render() {
    return (<div>
      Country of Origin :
      <select id="CountryOfOrigin_id" name="CountryOfOrigin" onChange={this.getValue}></select>
      <input type="hidden" name="CountryOfOriginNM" value="" id="CountryOfOriginNM"></input>
    </div>);
  }
}

export {
  CountryOfOrigin as default
}
