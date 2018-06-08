import React from 'react';
import $ from 'jquery';

class ClaimType extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     arr: {}
  //   };
  //
  // }
  // componentDidMount() {
  //   $.ajax({
  //     type: 'get', url: './data/ajaxGetSelection.jsp?type=1147', ./data/cx_Addr_ClaimType.jsp  ../data/Questionnaire.json
  //     dataType: "json",
  //     success: function(res) {
  //       let option = '';
  //       for (var i = 0; i < res.length; i++) {
  //         option += "<option value=" + res[i].ADDR_AGT_EID + " >" + res[i].ADDR_AGTABBR_NM + "</option>";
  //         $("#ClaimType_id").html("<option value='0' ></option> " + option);
  //       }
  //     }
  //   })
  // }
  render() {
    return (<div>
      ClaimType :
      <select id="ClaimType_id" name="ClaimType"></select>
      <input type="hidden" name="ClaimTypeNM" value="" id="ClaimTypeNM"></input>
    </div>);
  }
}

export {
  ClaimType as default
}
