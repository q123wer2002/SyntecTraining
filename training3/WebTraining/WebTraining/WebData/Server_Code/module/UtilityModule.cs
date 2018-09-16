using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebTraining.WebData.Server_Code.module
{
	public class UtilityModule
	{
	}

	public class SysUtility
	{
		public enum ErrorCode : int
		{
			error = -1,
			success = 0,
			paramError = 1
		}
	}
}
