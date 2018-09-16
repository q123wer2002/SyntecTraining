using System;
using System.Web.Routing;
namespace WebTraining
{
	public class Global : System.Web.HttpApplication
	{

		protected void Application_Start(object sender, EventArgs e)
		{
			RegisterRoutes( RouteTable.Routes );
		}

		void RegisterRoutes(RouteCollection routes)
		{
			routes.MapPageRoute( "LanguageSetting", "Language/{LNCODE}", "~/Main.aspx" );
		}

		protected void Session_Start(object sender, EventArgs e)
		{

		}

		protected void Application_BeginRequest(object sender, EventArgs e)
		{

		}

		protected void Application_AuthenticateRequest(object sender, EventArgs e)
		{

		}

		protected void Application_Error(object sender, EventArgs e)
		{

		}

		protected void Session_End(object sender, EventArgs e)
		{

		}

		protected void Application_End(object sender, EventArgs e)
		{

		}
	}
}