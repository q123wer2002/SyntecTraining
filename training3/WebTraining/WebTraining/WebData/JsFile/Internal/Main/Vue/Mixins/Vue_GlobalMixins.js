import Vue from 'vue';

const cncRestful = {
	version : {
		url : "http://localhost/SyntecCncWebService/Cncapi/v2",
		method : "GET",
		isNeedParam : false
	},
	workrecord : {
		url : "http://localhost/SyntecCncWebService/CncApi/v2/WorkRecordList",
		method : "POST",
		isNeedParam : true
	},
};

const backService = {
	test : {
		url : "./WebData/Server_code/test.aspx",
		method : "POST",
		isNeedParam : false
	}
	//call back service to modify postgre sql
}

const eCode = {
	error : -1,
	success : 0,
	paramError : 1
};

Vue.mixin({
	methods: {
		mixinRestfulapi : function( apiUrl, method, param ){
			return $.ajax({
				url: apiUrl,
				method : method,
				contentType : "application/json",
				data : JSON.stringify(param),
				dataType: "json",
				cache :false,
				success: function( result ){
				},
				error: function( result ){
				},
			});
		},
		mixinCncRestfulapi : function( cncdataType, param ){
			//no this api
			if( cncRestful[cncdataType] == undefined ){
				return {
					eCode : eCode[error]
				}
			}

			//get api object
			let apiObject = cncRestful[cncdataType];

			//check param
			if( apiObject.isNeedParam && param == undefined ){
				return {
					eCode : eCode[paramError]
				}
			}
			return this.mixinRestfulapi( apiObject.url, apiObject.method, param );
		},
		mixinBackService : function( backserviceType, param ){
			//no this api
			if( backService[backserviceType] == undefined ){
				return {
					eCode : eCode[error]
				}
			}

			//get api object
			let apiObject = backService[backserviceType];

			//check param
			if( apiObject.isNeedParam && param == undefined ){
				return {
					eCode : eCode[paramError]
				}
			}
			return this.mixinRestfulapi( apiObject.url, apiObject.method, param );
		}
	},
});