import React from 'react';
import $ from 'jquery';

class CustomerAgent extends React.Component {
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
      type: 'get', url: './data/ajaxGetSelection.jsp?type=79', //./data/ajaxGetSelection.jsp?type=1  ../data/Questionnaire.json
      dataType: "json",
      success: function(res) {
        let option = '';
        for (var i = 0; i < res.length; i++) {
          option += "<option value=" + res[i].addr_agt_eid + " >" + res[i].addr_agtabbr_nm + "</option>";
          $("#CustomerAgent_id").html(option);
        }
      }
    })
  }
  getValue() {
    let CustomerAgentName = $("#CustomerAgent_id")
      .find("option:selected")
      .text();
    $("#CustomerAgentNM").attr("value", CustomerAgentName);
  }
  render() {
    return (<div>
      Customer Agent :
      <select id="CustomerAgent_id" name="CustomerAgent" onChange={this.getValue}></select>
      <input type="hidden" name="CustomerAgentNM" value="" id="CustomerAgentNM"></input>
    </div>);
  }
}

export {
  CustomerAgent as default
}
