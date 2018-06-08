import React from 'react';
import $ from 'jquery';

class SectionBreak extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: {}
    };

  }
  // componentDidMount() {
  //   $.ajax({
  //     type: 'get',
  //     url: './data/ajaxGetSelection.jsp?type=1121',
  //     dataType: "json",
  //     success: function(res) {
  //       let option = '';
  //       for (var i = 0; i < res.length; i++) {
  //          option += "<option value=" + res[i].ADDR_AGT_EID + " >" + res[i].ADDR_AGTABBR_NM + "</option>";
  //         $("#SectionBreak_id").html("<option value='1' ></option> ");
  //       }
  //     }
  //   })
  // }
  render() {
    return (<div>
      Section Break :
      <select id="SectionBreak_id" name="SectionBreak">
        <option value="1">1</option>
      </select>
    </div>);
  }
}

export {
  SectionBreak as default
}
