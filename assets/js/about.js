var rsAPI = (function () {

	var public = {};
	// INIT FUNCTION
	function init() {

		// CALL INIT FUNCTIONS
		console.log("rsAPI loaded...");
		$.scrollIt({
			easing: 'linear',
			scrollTime: 500,
		});

		$("#tasteprofile").on("click", function() {
			window.open("http://russellstover.bradmurphydev.com/tasteprofile", "_blank");
		});

	}

	// PUBLIC FUNCTIONS
	public.init = init;


	// RETURN PUBLIC FUNCTIONS
	return public;

}());

$(document).on("ready", rsAPI.init);
