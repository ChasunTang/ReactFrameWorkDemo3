import React from "react";
import Agent from "./parameters/Agent";
import Season from "./parameters/Season";
import CutoffDateFrom from "./parameters/CutoffDateFrom";
import CutoffDateTo from "./parameters/CutoffDateTo";
import RegionalOperation from "./parameters/RegionalOperation";
import CustomerAgent from "./parameters/CustomerAgent";
import MerchDepartment from "./parameters/Merch.Department";
import MarketType from "./parameters/MarketType";
import Customer from "./parameters/Customer";
import Business from "./parameters/Business";
import BusinessChannel from "./parameters/BusinessChannel";
import BuyerDepartment from "./parameters/BuyerDepartment";
import VendorGroup from "./parameters/VendorGroup";
import Vendor from "./parameters/Vendor";
import ProductGroup from "./parameters/ProductGroup";
import ProductGroupList from "./parameters/ProductGroupList";
import CountryofOrigin from "./parameters/CountryOfOrigin";
import ClaimType from "./parameters/ClaimType";
import QCResponsibleOnly from "./parameters/QCResponsibleOnly";
import ClaimRate from "./parameters/ClaimRate";
import ClaimRateNot from "./parameters/ClaimRateNotExceeds";
import Wbreakdown from "./parameters/Breakdown";
import SectionBreak from "./parameters/SectionBreak";
import ReportCurrency from "./parameters/ReportCurrency";
import NoofDecinmalPlace from "./parameters/No.OfDecinmalPlace";
import RoundingFactor from "./parameters/RoundingFactor";
import InclOfficeBreakdown from "./parameters/Incl.OfficeBreakdown";
import $ from 'jquery';
class MGT2063 extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: {}
    }

  }
  componentDidMount() {
    let AgentName = $("#agent_id")
      .find("option:selected")
      .text();
    //alert(AgentName);
  }
  render() {

    return (<form action="MGT2063.jsp" method="post" target="_blank">

      <div id="">
        <Agent/><br/>
        <CutoffDateFrom/><br/>
        <CutoffDateTo/><br/>
        <CustomerAgent/><br/>
        <Wbreakdown/><br/>
        <SectionBreak/><br/>
        <ReportCurrency/><br/>
        <NoofDecinmalPlace/><br/>
        <RoundingFactor/><br/>
        <InclOfficeBreakdown/><br/>
        <Season/><br/>
        <RegionalOperation/><br/>
        <MerchDepartment/><br/>
        <MarketType/><br/>
        <Customer/><br/>
        <Business/><br/>
        <BusinessChannel/><br/>
        <BuyerDepartment/><br/>
        <VendorGroup/><br/>
        <Vendor/><br/>
        <ProductGroup/><br/>
        <ProductGroupList/><br/>
        <CountryofOrigin/><br/>
        <ClaimType/><br/>
        <QCResponsibleOnly/><br/>
        <ClaimRate/><br/>
        <ClaimRateNot/><br/>
        <button type="submit" value="viewReport">viewReport</button>
      </div>
    </form>);
  }
}

export {
  MGT2063 as default
}
