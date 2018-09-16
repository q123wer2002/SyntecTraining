(function (window, undefined) {
	//for init
	if (window.webTrainingObject) {
		alert("System Error , Global Entry Point has been taken");
		return;
	}

	//init
	window.webTrainingObject = {};
	window.webTrainingObject.vueModule = {};
	
}(window));