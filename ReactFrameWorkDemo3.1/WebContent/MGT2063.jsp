<%@page import="javax.print.DocFlavor.STRING"%>
<%@page import="java.util.Date"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.hoi.CrystalReport.ParameterPojo"%>
<%@page import="java.util.List"%>
<%@page import="java.util.HashMap"%>
<%@page import="com.hoi.CrystalReport.HOIJavaHelper"%>
<%@page contentType="text/html; charset=UTF-8" pageEncoding="ISO-8859-1" %>
<%
	    		try {
	                String addr_agt_eid = request.getParameter("Agent");
	                String CutoffDateFrom = request.getParameter("CutoffDateFrom");
	                String CutoffDateTo = request.getParameter("CutoffDateTo");
	                String addr_agtcust0_eid = request.getParameter("CustomerAgent");
	                String cbo_groupBy121_cd =request.getParameter("SectionBreak"); 
	                String curr_rpt_cd = request.getParameter("ReportCurrency");            	             
	                String numYear_at = request.getParameter("numYear_at");
	                String sea_imp_eid = request.getParameter("Season")==""?null:request.getParameter("Season");
	                String dept_regionO_eid = request.getParameter("RegionalOperation")==""?null:request.getParameter("RegionalOperation");
	                String dept_merch_eid = request.getParameter("MerchDepartment")==""?null:request.getParameter("MerchDepartment");
	                String merch_eid = request.getParameter("merch_eid");
	                String mkt_type_id = request.getParameter("MarketType");
	                String corp_id = request.getParameter("Customer")==""?null:request.getParameter("Customer");
	                String bus_id = request.getParameter("Business")==""?null:request.getParameter("Business");
	                String bus_channel_cd = request.getParameter("BusinessChannel")==""?null:request.getParameter("BusinessChannel");
	                String dept_buyer_eid = request.getParameter("BuyerDepartment")==""?null:request.getParameter("BuyerDepartment");
	                String vgp_eid = request.getParameter("VendorGroup")==""?null:request.getParameter("VendorGroup");
	                String addr_vndr_eid = request.getParameter("Vendor")==""?null:request.getParameter("Vendor");
	                String addr_fty_eid = request.getParameter("addr_fty_eid");
	                String rgn_eid = request.getParameter("rgn_eid");
	                String pg_eid = request.getParameter("ProductGroup")==""?null:request.getParameter("ProductGroup");
	                String  pg_list_nm = request.getParameter("ProductGroupList")==""?null:request.getParameter("ProductGroupList");
	                String cntry_co_cd = request.getParameter("CountryOfOrigin")==""?null:request.getParameter("CountryOfOrigin");
	                String po_maintype_cd = request.getParameter("po_maintype_cd");
	                String po_type_cd = request.getParameter("po_type_cd");
	                String cbo_poflag_eid = request.getParameter("cbo_poflag_eid");
	                String cbo_premium94_cd = request.getParameter("cbo_premium94_cd");
	                String clm_typelist_nm = request.getParameter("ClaimType")==""?null:request.getParameter("ClaimType"); 
	                boolean clm_qconly_in =request.getParameter("QCResponsibleOnly")==null?false:true;
	                boolean breakdown_in = request.getParameter("WBreakdown")==null?false:true;
	                boolean prt_offBrkdwn_in = request.getParameter("InclOfficeBreakdown")==null?false:true;
	                String clm_ratemin_pt = request.getParameter("ClaimRate")==""?null:request.getParameter("ClaimRate");
	                String clm_ratemax_pt = request.getParameter("ClaimRateNotExceeds")==""?null:request.getParameter("ClaimRateNotExceeds");
	                String decimal_at = request.getParameter("NoOfDecinmalPlace")==""?null:request.getParameter("NoOfDecinmalPlace");
	                String rounding_at = request.getParameter("RoundingFactor")==""?null:request.getParameter("RoundingFactor");  
	                System.out.println(
	                		"addr_agt_eid="+ addr_agt_eid+
	                		"\n CutoffDateFrom="+CutoffDateFrom+
	                		"\n CutoffDateTo="+CutoffDateTo+
	                		"\n addr_agtcust0_eid="+addr_agtcust0_eid+
	                		"\n cbo_groupBy121_cd="+cbo_groupBy121_cd+
	                		"\n curr_rpt_cd="+curr_rpt_cd     +   	             
	                		"\n numYear_at="+numYear_at +
	                		"\n sea_imp_eid="+sea_imp_eid +
	                		"\n dept_regionO_eid="+dept_regionO_eid+
	                		"\n dept_merch_eid="+dept_merch_eid +
	                		"\n merch_eid="+merch_eid +
	                		"\n mkt_type_id="+mkt_type_id +
	                		"\n corp_id="+corp_id+
	                		"\n bus_id="+bus_id +
	                		"\n bus_channel_cd="+bus_channel_cd +
	                		"\n dept_buyer_eid="+dept_buyer_eid+
	                		"\n vgp_eid="+vgp_eid +
	                		"\n addr_vndr_eid="+addr_vndr_eid +
	                		"\n addr_fty_eid="+addr_fty_eid +
	                		"\n rgn_eid="+rgn_eid +
	                		"\n pg_eid="+pg_eid +
	                		"\n pg_list_nm="+pg_list_nm +
	                		"\n cntry_co_cd="+cntry_co_cd +
	                		"\n po_maintype_cd="+po_maintype_cd +
	                		"\n po_type_cd="+po_type_cd +
	                		"\n cbo_poflag_eid="+cbo_poflag_eid +
	                		"\n cbo_premium94_cd="+cbo_premium94_cd +
	                		"\n clm_typelist_nm="+clm_typelist_nm+
	                		"\n clm_qconly_in="+clm_qconly_in+
	                		"\n breakdown_in="+breakdown_in +
	                		"\n prt_offBrkdwn_in="+prt_offBrkdwn_in +
	                		"\n clm_ratemin_pt="+clm_ratemin_pt +
	                		"\n clm_ratemax_pt="+clm_ratemax_pt +
	                		"\n decimal_at="+decimal_at+
	                		"\n rounding_at="+rounding_at  
	                		);
	                String reportName = "MGT2063.rpt";
	    			List<ParameterPojo> parameterPojoList = new ArrayList<ParameterPojo>();
	    			ParameterPojo pojo = new ParameterPojo();
	    			pojo.setParameterName("@usr_id");
	    			pojo.setParameterValue("'sophia.lin'");
	    			parameterPojoList.add(pojo);
	    			
	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@accesslevel_at");
	    			pojo.setParameterValue(new Integer(0));
	    			parameterPojoList.add(pojo);
	    			
	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@addr_agt_eid");
	    			pojo.setParameterValue(addr_agt_eid);
	    			parameterPojoList.add(pojo);
	    			
	    			java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("yyyy-MM-dd",java.util.Locale.CHINA); 
	    			Date d1 = sdf.parse(CutoffDateFrom); 
	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@cutoff_from_dt");
	    			pojo.setParameterValue(d1);
	    			parameterPojoList.add(pojo);

	    			Date d2 = sdf.parse(CutoffDateTo); 
	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@cutoff_To_dt");
	    			pojo.setParameterValue(d2); 
	    			parameterPojoList.add(pojo); 
	    			
	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@addr_agtcust0_eid");
	    			pojo.setParameterValue(addr_agtcust0_eid);
	    			parameterPojoList.add(pojo);
						
	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@cbo_groupBy121_cd");
	    			pojo.setParameterValue(cbo_groupBy121_cd);
	    			parameterPojoList.add(pojo);
	    			
	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@curr_rpt_cd");
	    			pojo.setParameterValue(curr_rpt_cd);
	    			parameterPojoList.add(pojo);

	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@decimal_at");
	    			pojo.setParameterValue(decimal_at);
	    			parameterPojoList.add(pojo);

	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@rounding_at");
	    			pojo.setParameterValue(rounding_at);
	    			parameterPojoList.add(pojo);

	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@prt_offBrkdwn_in");
	    			pojo.setParameterValue(prt_offBrkdwn_in);
	    			parameterPojoList.add(pojo);
	    			
	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@breakdown_in");
	    			pojo.setParameterValue(breakdown_in);
	    			parameterPojoList.add(pojo);
	    			
	    			
	    			
	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@numYear_at");
	    			pojo.setParameterValue(numYear_at);
	    			parameterPojoList.add(pojo);
	    			
	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@sea_imp_eid");
	    			pojo.setParameterValue(sea_imp_eid);
	    			parameterPojoList.add(pojo);

	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@dept_regionO_eid");
	    			pojo.setParameterValue(dept_regionO_eid);
	    			parameterPojoList.add(pojo);

	    			
	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@dept_merch_eid");
	    			pojo.setParameterValue(dept_merch_eid);
	    			parameterPojoList.add(pojo);

	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@merch_eid");
	    			pojo.setParameterValue(merch_eid);
	    			parameterPojoList.add(pojo);

	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@mkt_type_id");
	    			pojo.setParameterValue(mkt_type_id);
	    			parameterPojoList.add(pojo);

	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@corp_id");
	    			pojo.setParameterValue(corp_id);
	    			parameterPojoList.add(pojo);

	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@bus_id");
	    			pojo.setParameterValue(bus_id);
	    			parameterPojoList.add(pojo);

	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@bus_channel_cd");
	    			pojo.setParameterValue(bus_channel_cd);
	    			parameterPojoList.add(pojo);

	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@dept_buyer_eid");
	    			pojo.setParameterValue(dept_buyer_eid);
	    			parameterPojoList.add(pojo);

	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@vgp_eid");
	    			pojo.setParameterValue(vgp_eid);
	    			parameterPojoList.add(pojo);

	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@addr_vndr_eid");
	    			pojo.setParameterValue(addr_vndr_eid);
	    			parameterPojoList.add(pojo);

	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@addr_fty_eid");
	    			pojo.setParameterValue(addr_fty_eid);
	    			parameterPojoList.add(pojo);

	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@rgn_eid");
	    			pojo.setParameterValue(rgn_eid);
	    			parameterPojoList.add(pojo);

	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@pg_eid");
	    			pojo.setParameterValue(null);
	    			parameterPojoList.add(pojo);

	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@pg_list_nm");
	    			pojo.setParameterValue(pg_list_nm);
	    			parameterPojoList.add(pojo);

	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@cntry_co_cd");
	    			pojo.setParameterValue(cntry_co_cd);
	    			parameterPojoList.add(pojo);

	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@po_maintype_cd");
	    			pojo.setParameterValue(po_maintype_cd);
	    			parameterPojoList.add(pojo);

	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@po_type_cd");
	    			pojo.setParameterValue(po_type_cd);
	    			parameterPojoList.add(pojo);

	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@cbo_poflag_eid");
	    			pojo.setParameterValue(cbo_poflag_eid);
	    			parameterPojoList.add(pojo);
	    			
	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@cbo_premium94_cd");
	    			pojo.setParameterValue(cbo_premium94_cd);
	    			parameterPojoList.add(pojo);
	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@clm_typelist_nm");
	    			pojo.setParameterValue(clm_typelist_nm);
	    			parameterPojoList.add(pojo);

	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@clm_qconly_in");
	    			pojo.setParameterValue(clm_qconly_in);
	    			parameterPojoList.add(pojo);
	    			
	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@clm_ratemin_pt");
	    			pojo.setParameterValue(clm_ratemin_pt);
	    			parameterPojoList.add(pojo);

	    			pojo = new ParameterPojo();
	    			pojo.setParameterName("@clm_ratemax_pt");
	    			pojo.setParameterValue(clm_ratemax_pt);
	    			parameterPojoList.add(pojo);

	    			

	    			String AgentNM = "'"+request.getParameter("AgentNM")+"'";
	    			String BusinessNM = request.getParameter("BusinessNM")==""?"'<all>'":"'"+request.getParameter("BusinessNM")+"'";
	    			String BusinessChannelNM = request.getParameter("BusinessChannelNM")==""?"'<all>'":"'"+request.getParameter("BusinessChannelNM")+"'";
	    			String BuyerDepartmentNM = request.getParameter("BuyerDepartmentNM")==""?"'<all>'":"'"+request.getParameter("BuyerDepartmentNM")+"'";
	    			String ClaimRateNM = request.getParameter("ClaimRateNM")==""?"'N/A'":"'"+request.getParameter("ClaimRateNM")+"'";
	    			String ClaimRateNotExceedsNM = request.getParameter("ClaimRateNotExceedsNM")==""?"'N/A'":"'"+request.getParameter("ClaimRateNotExceedsNM")+"'";
	    			String ClaimTypeNM = request.getParameter("ClaimTypeNM")==""?"'<all>'":"'"+request.getParameter("ClaimTypeNM")+"'";
	    			String CountryOfOriginNM = request.getParameter("CountryOfOriginNM")==""?"'<all>'":"'"+request.getParameter("CountryOfOriginNM")+"'";
	    			String CustomerNM = request.getParameter("CustomerNM")==""?"'<all>'":"'"+request.getParameter("CustomerNM")+"'";
	    			String CustomerAgentNM = "'"+request.getParameter("CustomerAgentNM")+"'";
	    			String MarketTypeNM = request.getParameter("MarketTypeNM")==""?"'<all>'":"'"+request.getParameter("MarketTypeNM")+"'";
	    			String MerchDepartmentNM = request.getParameter("MerchDepartmentNM")==""?"'<all>'":"'"+request.getParameter("MerchDepartmentNM")+"'";
	    			String ProductGroupNM = request.getParameter("ProductGroupNM")==""?"'<all>'":"'"+request.getParameter("ProductGroupNM")+"'";
	    			String ProductGroupListNM = request.getParameter("ProductGroupListNM")==""?"'<all>'":"'"+request.getParameter("ProductGroupListNM")+"'";
	    			String RegionalOperationNM =request.getParameter("RegionalOperationNM")==""?"'<all>'":"'"+request.getParameter("RegionalOperationNM")+"'";
	    			String ReportCurrencyNM = request.getParameter("ReportCurrencyNM")==""?"'<all>'":"'"+request.getParameter("ReportCurrencyNM")+"'";
	    			String SeasonNM = request.getParameter("SeasonNM")==""?"'<all>'":"'"+request.getParameter("SeasonNM")+"'";
	    			String VendorNM = request.getParameter("VendorNM")==""?"'<all>'":"'"+request.getParameter("VendorNM")+"'";
	    			String VendorGroupNM = request.getParameter("VendorGroupNM")==""?"'<all>'":"'"+request.getParameter("VendorGroupNM")+"'";
	    			
	    			
	    			HashMap<String, String> formulaMap = new HashMap<String, String>();
					formulaMap.put("Hdr_Agt_nm",AgentNM);
					formulaMap.put("Hdr_agtcust_nm",CustomerAgentNM);
					formulaMap.put("Hdr_agtsupt_nm","'<all>'");
					formulaMap.put("Hdr_Bus_nm",BusinessNM);
					formulaMap.put("Hdr_BusChannel_nm",BusinessChannelNM);
					formulaMap.put("hdr_clmtype_nm",ClaimTypeNM);
					formulaMap.put("Hdr_Cntry_nm","'C/O'");
					formulaMap.put("Hdr_Corp_NM","'Corp'");
					formulaMap.put("Hdr_DeptBuyer_NM",BuyerDepartmentNM);
					formulaMap.put("Hdr_DeptMerch_nm",MerchDepartmentNM);
					formulaMap.put("Hdr_Figure_nm","'<all>'");
					formulaMap.put("Hdr_LogoFile_Nm","'rlogo.bmp'");
					formulaMap.put("Hdr_MKTType_NM",MarketTypeNM);
					formulaMap.put("hdr_Prod_Nm","'<all>'");
					formulaMap.put("Hdr_QConly_NM","'QC Responsible Only'");
					formulaMap.put("Hdr_RegionO_NM",RegionalOperationNM);
					formulaMap.put("Hdr_Season_NM",SeasonNM);
					formulaMap.put("Hdr_SrvLoc_NM","'Location'");
					formulaMap.put("Hdr_Subtitle_NM","'<all>'");
				    formulaMap.put("Hdr_TimeFrame01_NM","'S0TimeFrame01_NM'");
				    formulaMap.put("Hdr_Usr_ID","'CHASUN.TANG'");
				    formulaMap.put("Hdr_Version_ID","1.0");
				    formulaMap.put("Hdr_VGP_nm",VendorGroupNM);
				    formulaMap.put("Hdr_Vndr_nm",VendorNM); 
				
	    			HOIJavaHelper.callReport(reportName, session, request, response, application, out, parameterPojoList, formulaMap); 	                	    			
	    		} catch (Exception e) {
	    		    out.println(e);
	    		}  
	%>