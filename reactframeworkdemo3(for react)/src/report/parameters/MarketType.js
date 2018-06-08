import React from 'react';
import $ from 'jquery';

class MarketType extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     arr: {}
  //   };
  //
  // }
  // componentDidMount() {
  //   $.ajax({
  //     type: 'get', url: './data/ajaxGetSelection.jsp?type=149', ./data/cx_Addr_MarketType.jsp  ../data/Questionnaire.json
  //     dataType: "json",
  //     success: function(res) {
  //       let option = '';
  //       for (var i = 0; i < res.length; i++) {
  //         option += "<option value=" + res[i].mkt_type_id + " >" + res[i].mkt_type_nm + "</option>";
  //         $("#MarketType_id").html("<option value='0' ></option> " + option);
  //       }
  //     }
  //   })
  // }
  render() {
    return (<div>
      Market Type :
      <select id="MarketType_id" name="MarketType"></select>
      <input type="hidden" name="MarketTypeNM" value="" id="MarketTypeNM"></input>
    </div>);
  }
}

export {
  MarketType as default
}
