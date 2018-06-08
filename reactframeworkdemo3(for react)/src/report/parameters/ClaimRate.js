import React from 'react';
import $ from 'jquery';

class ClaimRate extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     arr: {}
  //   };
  //
  // }
  // componentDidMount() {
  //   $.ajax({
  //     type: 'get', url: './data/ajaxGetSelection.jsp?', ./data/cx_Addr_ClaimRate.jsp  ../data/Questionnaire.json
  //     dataType: "json",
  //     success: function(res) {
  //       let option = '';
  //       for (var i = 0; i < res.length; i++) {
  //         option += "<option value=" + res[i].ADDR_AGT_EID + " >" + res[i].ADDR_AGTABBR_NM + "</option>";
  //         $("#ClaimRate_id").html("<option value='0' ></option> " + option);
  //       }
  //     }
  //   })
  // }
  render() {
    return (<div>
      Claim Rate at least(%) :
      <select id="ClaimRate_id" name="ClaimRate"></select>
      <input type="hidden" name="ClaimRateNM" value="" id="ClaimRateNM"></input>
    </div>);
  }
}

export {
  ClaimRate as default
}
