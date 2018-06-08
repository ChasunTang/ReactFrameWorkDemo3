import React from 'react';
import $ from 'jquery';

class ReportCurrency extends React.Component {
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
      type: 'get', url: './data/ajaxGetSelection.jsp?type=97', //./data/cx_Addr_ReportCurrency.jsp  ../data/Questionnaire.json
      dataType: "json",
      success: function(res) {
        let option = '';
        for (var i = 0; i < res.length; i++) {
          option += "<option value=" + res[i].curr_cd + " >" + res[i].curr_cd + "</option>";
          $("#ReportCurrency_id").html(option);
        }
      }
    })
  }
  getValue() {
    let ReportCurrencyName = $("#RegionalOperation_id")
      .find("option:selected")
      .text();
    $("#ReportCurrencyNM").attr("value", ReportCurrencyName);
  }
  render() {
    return (<div>
      Report Currency :
      <select id="ReportCurrency_id" name="ReportCurrency" onChange={this.getValue}></select>
      <input type="hidden" name="ReportCurrencyNM" value="" id="ReportCurrencyNM"></input>
    </div>);
  }
}

export {
  ReportCurrency as default
}
