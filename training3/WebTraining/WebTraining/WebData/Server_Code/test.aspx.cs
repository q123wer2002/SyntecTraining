using Newtonsoft.Json.Linq;
using System;
using WebTraining.WebData.Server_Code.module;

namespace WebTraining.WebData.Server_Code
{
	public partial class WebForm1 : System.Web.UI.Page
	{
		dynamic m_obReturnResult = new JObject();

		protected void Page_Load( object sender, EventArgs e )
		{
			m_obReturnResult.status = SysUtility.ErrorCode.success;
			m_obReturnResult.data = "test ok";
			Response.Write( m_obReturnResult );
		}

		void Page_Error( object sender, EventArgs e )
		{
			m_obReturnResult.status = SysUtility.ErrorCode.error;
			m_obReturnResult.data = "";
			Response.Write( m_obReturnResult );
			Server.ClearError();
		}
	}
}
