import React from 'react';
import $ from 'jquery';

class BusinessChannel extends React.Component {
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
      type: 'get', url: './data/ajaxGetSelection.jsp?type=16', //./data/cx_Addr_BusinessChannel.jsp  ../data/Questionnaire.json
      dataType: "json",
      success: function(res) {
        let option = '';
        for (var i = 0; i < res.length; i++) {
          option += "<option value=" + res[i].bus_channel_nm + " >" + res[i].bus_channel_nm + "</option>";
          $("#BusinessChannel_id").html("<option ></option> " + option);
        }
      }
    })
  }
  getValue() {
    let BusinessChannelName = $("#BusinessChannel_id")
      .find("option:selected")
      .text();
    $("#BusinessChannelNM").attr("value", BusinessChannelName);
  }
  render() {
    return (<div>
      Business Channel :
      <select id="BusinessChannel_id" name="BusinessChannel" onChange={this.getValue}></select>
      <input type="hidden" name="BusinessChannelNM" value="" id="BusinessChannelNM"></input>
    </div>);
  }
}

export {
  BusinessChannel as default
}
