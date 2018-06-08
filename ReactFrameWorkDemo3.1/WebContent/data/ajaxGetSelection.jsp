<%@page import="javax.print.DocFlavor.STRING"%>
<%@page import="java.io.PrintWriter"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@page import="com.google.gson.Gson"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.Map"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.sql.*"%>
<%@ page import="org.json.*"%>
	<%
		int type = Integer.parseInt(request.getParameter("type"));
		//System.out.println("type="+type);
	 	String sql = null;
		String url = "jdbc:sqlserver://10.109.247.86:1433;database=allegroB";
		String driverName = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
		String user = "chasun.tang";
		String password = "chasun!001";
		if(type==7){
			sql = "exec cx_Agt_Vendor null,null,null,null,null,null,null,null";
		}else if(type==9){
			sql = "exec cx_Business null,null,null,null,null,null,null,null";
		}else if(type==15){
			sql = "exec cx_Corp null,null,null,null,null,null";
		}else if(type==16){
			sql = "exec cx_BusinessChannel null,null,null,null,null,null,null";
		}else if(type==19){
			sql = "exec cx_Country null,null,null,null,null";
		}else if(type==28){
			sql = "exec cx_Dept_Merch null,null,null,null,null,null,null,null";
		}else if(type==45){
			sql = "exec cx_PG null,null,null,null,null,null,null,null,null";
		}else if(type==74){
			sql = "exec cx_VendorGroup null,null,null,null,null";
		}else if(type==79){
			sql = "exec cx_Addr_Agent null,null,null,null,null,null";
		}else if(type==92){
			sql = "exec cx_Dept_RegionO1 null,null,null,null,null,null,null,null";
		}else if(type==97){
			sql = "exec cx_Currency null,null,null,null,null,null,null";
		}else if(type==104){
			sql = "exec cx_Dept_Buyer null,null,null,null,null,null,null,null";
		}else if(type==148){
			//sql = "exec cx_Season_Imp null,null,null,null,null,null,null,null";
			sql = "exec cx_Season null,null,null,null,null,null,null,null";
		}else if(type==1082){
			sql = "";
		}else if(type==1121){
			sql = "";
		}else if(type==1147){
			sql = "";
		}
		try {
			Class.forName(driverName);
			Connection con = DriverManager.getConnection(url, user, password);
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(sql);
			String szJson = "";
			if (rs != null) {
				try {
					ResultSetMetaData rsmd = rs.getMetaData();
					int numCol = rsmd.getColumnCount();

					JSONArray json = new JSONArray();

					while (rs.next()) {
						JSONObject rec = new JSONObject();

						for (int j = 1; j <= numCol; j++) {

							String szCol = rsmd.getColumnName(j).toLowerCase();

							switch (rsmd.getColumnType(j)) {

							case java.sql.Types.ARRAY:
								rec.put(szCol, rs.getArray(szCol));
								break;
							case java.sql.Types.BIGINT:
								rec.put(szCol, rs.getLong(szCol));
								break;
							case java.sql.Types.BOOLEAN:
								rec.put(szCol, rs.getBoolean(szCol));
								break;
							case java.sql.Types.BLOB:
								rec.put(szCol, rs.getBlob(szCol));
								break;
							case java.sql.Types.DOUBLE:
								rec.put(szCol, rs.getDouble(szCol));
								break;
							case java.sql.Types.FLOAT:
								rec.put(szCol, rs.getFloat(szCol));
								break;
							case java.sql.Types.INTEGER:
								rec.put(szCol, rs.getInt(szCol));
								break;
							case java.sql.Types.NCHAR:
								rec.put(szCol, rs.getNString(szCol));
								break;
							case java.sql.Types.NVARCHAR:
								rec.put(szCol, rs.getNString(szCol));
								break;
							case java.sql.Types.CHAR:
								rec.put(szCol, rs.getString(szCol));
								break;
							case java.sql.Types.VARCHAR:
								rec.put(szCol, rs.getString(szCol));
								break;
							case java.sql.Types.TINYINT:
								rec.put(szCol, rs.getInt(szCol));
								break;
							case java.sql.Types.SMALLINT:
								rec.put(szCol, rs.getInt(szCol));
								break;
							case java.sql.Types.DATE:
								rec.put(szCol, rs.getDate(szCol));
								break;
							case java.sql.Types.TIMESTAMP:
								rec.put(szCol, rs.getTimestamp(szCol));
								break;
							default:
								rec.put(szCol, rs.getObject(szCol));
								break;
							}
						}

						json.put(rec);
						szJson = json.toString();
					}
				} catch (Exception e) {
					e.printStackTrace();
				}
			}

			if (szJson.equals("")){
				szJson = "[]";
			}
			//System.out.println(type +"\t\t"+szJson);
			out.println(szJson);
			rs.close();
			st.close();
			con.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	%>
