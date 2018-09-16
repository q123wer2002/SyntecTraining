import Vue from 'vue'
import store from '../Vuex/Vuex_GlobalStore';
import '../Mixins/Vue_GlobalMixins';

(function (window, undefined) {
	function IVue_Global_Setting_Creator() {
		var _this = this;
		var _Instance = null;

		this.Init = function () {
			_Instance = new Vue({
				store: store,
				el: '#MainVueView', //map to html tag
				components: {
				},
				data: {
					//date slector
					startDate : "",
					endDate : "",

					//result
					workrecrodArray : [],
				},
				watch: {
				},
				computed: {
				},
				methods: {
					fnSelectDate : function(){
						let _this = this;
						if( _this.startDate.length == 0 || _this.endDate.length == 0 ){
							return;
						}

						_this.fnGetAllWorkrecord( _this.startDate, _this.endDate, "+0800" );
					},
					fnGetAllWorkrecord : function( startDate, endDate, timezon ){
						//pass current data
						let _this = this;

						//start getting
						let params = {
							fromdate : startDate,
							todate : endDate,
							timezone : timezon
						};

						//call api
						_this.mixinCncRestfulapi( "workrecord", params )
						.then( (result) => {
							_this.workrecrodArray = result.result;
						});
					}
				},
				created : function(){
				},
				mounted: function () {
					let _this = this;

					//test call back service
					_this.mixinBackService( "test" )
					.then( (result) => {
					});
				}
			})
		};
	}

	//assign to global variable for use
	window.webTrainingObject.vueModule = new IVue_Global_Setting_Creator();
}(window));
