import React from 'react';
import $ from 'jquery';

class ClaimRateNotExceeds extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     arr: {}
  //   };
  //
  // }
  // componentDidMount() {
  //   $.ajax({
  //     type: 'get', url: './data/ajaxGetSelection.jsp?type=7', ./data/cx_Addr_ClaimRateNotExceeds.jsp  ../data/Questionnaire.json
  //     dataType: "json",
  //     success: function(res) {
  //       let option = '';
  //       for (var i = 0; i < res.length; i++) {
  //         option += "<option value=" + res[i].ADDR_AGT_EID + " >" + res[i].ADDR_AGTABBR_NM + "</option>";
  //         $("#ClaimRateNotExceeds_id").html("<option value='0' ></option> " + option);
  //       }
  //     }
  //   })
  // }
  render() {
    return (<div>
      Claim Rate not exceeds(%) :
      <select id="ClaimRateNotExceeds_id" name="ClaimRateNotExceeds"></select>
      <input type="hidden" name="ClaimRateNotExceedsNM" value="" id="ClaimRateNotExceedsNM"></input>
    </div>);
  }
}

export {
  ClaimRateNotExceeds as default
}
