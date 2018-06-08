import React from 'react';
import $ from 'jquery';

class ProductGroup extends React.Component {
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
      type: 'get', url: './data/ajaxGetSelection.jsp?type=45', //./data/cx_Addr_ProductGroup.jsp  ../data/Questionnaire.json
      dataType: "json",
      success: function(res) {
        let option = '';
        for (var i = 0; i < res.length; i++) {
          option += "<option value=" + res[i].pg_nm + " >" + res[i].pg_nm + "</option>";
          $("#ProductGroup_id").html("<option ></option> " + option);
        }
      }
    })
  }
  getValue() {
    let ProductGroupName = $("#ProductGroup_id")
      .find("option:selected")
      .text();
    $("#ProductGroupNM").attr("value", ProductGroupName);
  }
  render() {
    return (<div>
      Product Group :
      <select id="ProductGroup_id" name="ProductGroup" onChange={this.getValue}></select>
      <input type="hidden" name="ProductGroupNM" value="" id="ProductGroupNM"></input>
    </div>);
  }
}

export {
  ProductGroup as default
}
