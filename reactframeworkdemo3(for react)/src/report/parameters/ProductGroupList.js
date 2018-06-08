import React from 'react';
import $ from 'jquery';

class ProductGroupList extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     arr: {}
  //   };
  //
  // }
  // componentDidMount() {
  //   $.ajax({
  //     type: 'get', url: './data/ajaxGetSelection.jsp?', ./data/cx_Addr_ProductGroupList.jsp  ../data/Questionnaire.json
  //     dataType: "json",
  //     success: function(res) {
  //       let option = '';
  //       for (var i = 0; i < res.length; i++) {
  //         option += "<option value=" + res[i].ADDR_AGT_EID + " >" + res[i].ADDR_AGTABBR_NM + "</option>";
  //         $("#ProductGroupList_id").html("<option value='0' ></option> " + option);
  //       }
  //     }
  //   })
  // }
  render() {
    return (<div>
      Product Group(list) :
      <select id="ProductGroupList_id" name="ProductGroupList"></select>
      <input type="hidden" name="ProductGroupListNM" value="" id="ProductGroupListNM"></input>
    </div>);
  }
}

export {
  ProductGroupList as default
}
