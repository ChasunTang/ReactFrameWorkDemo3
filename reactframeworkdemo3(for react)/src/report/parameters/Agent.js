import React from 'react';
import $ from 'jquery';

class Agent extends React.Component {
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
      type: 'get', url: './data/ajaxGetSelection.jsp?type=79', //./data/ajaxGetSelection.jsp?type=79  ../data/Questionnaire.json
      dataType: "json",
      success: function(res) {
        let option = '';
        for (var i = 0; i < res.length; i++) {
          option += "<option value=" + res[i].addr_agt_eid + " >" + res[i].addr_agtabbr_nm + "</option>";
          $("#agent_id").html(option);
        }
      }
    })
  }
  getValue() {
    let AgentName = $("#agent_id")
      .find("option:selected")
      .text();
    $("#AgentNM").attr("value", AgentName);
  }
  render() {
    return (<div>
      Agent :
      <select id="agent_id" name="Agent" onChange={this.getValue}></select>
      <input type="hidden" name="AgentNM" value="" id="AgentNM"></input>
    </div>);
  }
}

export {
  Agent as default
}
