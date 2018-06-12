package com.hoi.CrystalReport;

import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.jsp.JspWriter;

import com.businessobjects.samples.CRJavaHelper;
import com.crystaldecisions.report.web.viewer.CrystalReportViewer;
import com.crystaldecisions.sdk.occa.report.application.DataDefController;
import com.crystaldecisions.sdk.occa.report.application.FormulaFieldController;
import com.crystaldecisions.sdk.occa.report.application.OpenReportOptions;
import com.crystaldecisions.sdk.occa.report.application.ReportClientDocument;
import com.crystaldecisions.sdk.occa.report.data.Fields;
import com.crystaldecisions.sdk.occa.report.data.FormulaField;
import com.crystaldecisions.sdk.occa.report.data.IDataDefinition;
import com.crystaldecisions.sdk.occa.report.data.IFormulaField;
import com.crystaldecisions.sdk.occa.report.lib.ReportSDKException;
import com.crystaldecisions.sdk.occa.report.lib.ReportSDKExceptionBase;

public class HOIJavaHelper {
	public static void callReport(String reportName,HttpSession session,HttpServletRequest request,
			HttpServletResponse response, ServletContext application, JspWriter out, 
			List<ParameterPojo> parameterPojoList, HashMap<String, String> formulaMap) throws IOException {
		try {
			ReportClientDocument clientDoc = (ReportClientDocument) session.getAttribute(reportName);
			if (clientDoc == null) {
				// Report can be opened from the relative location specified in the CRConfig.xml, or the report location
				// tag can be removed to open the reports as Java resources or using an absolute path
				// (absolute path not recommended for Web applications).
				
				clientDoc = new ReportClientDocument();
				clientDoc.isCachable(0);
				clientDoc.setReportAppServer(ReportClientDocument.inprocConnectionString);
				
				
				// Open report
				clientDoc.open(reportName, OpenReportOptions._discardSavedData);

			
				// ****** BEGIN SET RUNTIME DATABASE CREDENTIALS ****************  
				{
					String connectString = "jdbc:sqlserver://10.109.244.123:1433;database=allegroB";
					String driverName = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
					String JNDIName = "";
					String userName = "grs.user";			// TODO: Fill in database user
					String password = "grsO!user";		// TODO: Fill in password

					// Switch all tables on the main report and sub reports
					CRJavaHelper.changeDataSource(clientDoc, userName, password, connectString, driverName, JNDIName);

					// logon to database
					CRJavaHelper.logonDataSource(clientDoc, userName, password);
				} 
	 			// ****** END SET RUNTIME DATABASE CREDENTIALS **************** 		

				
						
				// ****** BEGIN CONNECT PARAMETERS SNIPPET ****************		
				setParameter(clientDoc, parameterPojoList);
//				 {
//					// STRING VALUE PARAMETER.  
//					String stringValue = "sophia.lin";	// TODO: Fill in value
//					CRJavaHelper.addDiscreteParameterValue(clientDoc, "", "@usr_id", stringValue);
//				}
//				{
//					// NUMBER VALUE PARAMETER.  
//					Integer numberValue = new Integer(0);	// TODO: Fill in value
//					CRJavaHelper.addDiscreteParameterValue(clientDoc, "", "@accesslevel_at", numberValue);
//				}
//				{
//					// NUMBER VALUE PARAMETER.  
//					Integer numberValue = new Integer(1000000029);	// TODO: Fill in value
//					CRJavaHelper.addDiscreteParameterValue(clientDoc, "", "@addr0_eid", numberValue);
//				}
//				{
//					// NUMBER VALUE PARAMETER.  
//					Integer numberValue = new Integer(0);	// TODO: Fill in value
//					CRJavaHelper.addDiscreteParameterValue(clientDoc, "", "@dept_regionO_eid", numberValue);
//				}
//				{
//					// NUMBER VALUE PARAMETER.  
//					Integer numberValue = new Integer(0);	// TODO: Fill in value
//					CRJavaHelper.addDiscreteParameterValue(clientDoc, "", "@dept_eid", numberValue);
//				}
//				{
//					// STRING VALUE PARAMETER.  
//					String stringValue = null;	// TODO: Fill in value
//					CRJavaHelper.addDiscreteParameterValue(clientDoc, "", "@ugp_lst", stringValue);
//				} 
				
	//////////end 
				
				// ****** BEGIN ChangeFormula ****************  
				HOIJavaHelper.ChangeFormula(clientDoc, formulaMap); 
				// ****** End ChangeFormula ****************  

				// Store the report document in session
				session.setAttribute(reportName, clientDoc);

			}

					
			// ****** BEGIN CONNECT CRYSTALREPORTPAGEVIEWER SNIPPET ****************  
			{
				// Create the CrystalReportViewer object
				CrystalReportViewer crystalReportPageViewer = new CrystalReportViewer();

				String reportSourceSessionKey = reportName+"ReportSource";
				Object reportSource = session.getAttribute(reportSourceSessionKey);
				if (reportSource == null)
				{
					reportSource = clientDoc.getReportSource();
					session.setAttribute(reportSourceSessionKey, reportSource);
				}
				//	set the reportsource property of the viewer
				crystalReportPageViewer.setReportSource(reportSource);

				// Apply the viewer preference attributes


				// Process the report
				crystalReportPageViewer.processHttpRequest(request, response, application, null); 

			}
			// ****** END CONNECT CRYSTALREPORTPAGEVIEWER SNIPPET ****************		
		

		} catch (Exception e) {
		    e.printStackTrace();
		}
		
	}
	
	private static void ChangeFormula(ReportClientDocument clientDoc, HashMap<String, String> map) throws ReportSDKException {
	     DataDefController dataDefController = clientDoc.getDataDefController();
	     IDataDefinition dataDefinition = dataDefController.getDataDefinition();	//get the formula object
	     FormulaFieldController formulaFieldController = dataDefController.getFormulaFieldController(); // for modify formula object
	     Fields<IFormulaField> formulaFields = dataDefinition.getFormulaFields();
	     Iterator<IFormulaField> itFormulaField = formulaFields.iterator();
	     while (itFormulaField.hasNext()) {
	    	 IFormulaField formulaField = (IFormulaField) itFormulaField.next();
	    	 FormulaField newFiled = (FormulaField)formulaField.clone(true);
	    	 if(map.containsKey(newFiled.getName())) {
	    			 newFiled.setText(map.get(newFiled.getName()));
	    			 formulaFieldController.modify(formulaField, newFiled);
	    	 }
		}

		}
	private static void setParameter(ReportClientDocument clientDoc, List<ParameterPojo> parameterPojoList) throws ReportSDKException {
		for (int i = 0; i < parameterPojoList.size(); i++) {
			ParameterPojo pojo = parameterPojoList.get(i);
			CRJavaHelper.addDiscreteParameterValue(clientDoc, "", pojo.getParameterName(), pojo.getParameterValue());
		}
	}
}
