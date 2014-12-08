var rsAPI = (function () {

	var public = {},
			navStatus = true;

	// MOBILE NAV FUNCTIONALITY
	function nav() {

		$("#nav-icon").click(function() {
			$(this).toggleClass("open");
			if(navStatus) {
				TweenMax.to("#mobileNav", 0.5, {top:"40px", ease: Back.easeInOut});
				navStatus = false;
			} else {
				TweenMax.to("#mobileNav", 0.5, {top:"-230px", ease: Back.easeInOut});
				navStatus = true;
			}
		});

	}

	// PRODUCT SLIDER
	function slider() {

		var pageHolder = $('.slides');
		var page;
		var pageWidth;
		
		if( product ) {

		  page = pageHolder.find('.flavor-product');
			pageWidth = page.outerWidth(true);

			$(".right").on("click", function() {

				var navStatus = true;

				if (navStatus) {

					var rightTL = new TimelineMax();

					rightTL.to(".products-container", 0.5, {
						scrollTo:{x: pageWidth},
						ease: Power4.easeInOut
					})
					.to(".right", 0.5, {
						css: {autoAlpha:0},
						ease: Power4.easeInOut
					}, -1)
					.to(".left", 0.5, {
						css: {autoAlpha:1},
						ease: Power4.easeInOut
					}, -1);

					navStatus = false;

				}

			});

			$(".left").on("click", function() {

				var navStatus = true;

				if (navStatus) {

					var leftTL = new TimelineMax();

					leftTL.to(".products-container", 0.5, {
						scrollTo:{x: -pageWidth},
						ease: Power4.easeInOut
					})
					.to(".left", 0.5, {
						css: {autoAlpha:0},
						ease: Power4.easeInOut
					}, -1)
					.to(".right", 0.5, {
						css: {autoAlpha:1},
						ease: Power4.easeInOut
					}, -1);

					navStatus = false;

				}

			});

		}

		if ( chocolate ) {

			page = pageHolder.find('.choc-box');
			pageWidth = page.outerWidth(true);

			$(".choc-right").on("click", function() {

				var navStatus = true;

				if (navStatus) {

					var rightChocTL = new TimelineMax();

					rightChocTL.to(".choc-container", 0.5, {
						scrollTo:{x: pageWidth},
						ease: Power4.easeInOut
					})
					.to(".choc-right", 0.5, {
						css: {autoAlpha:0},
						ease: Power4.easeInOut
					}, -1)
					.to(".choc-left", 0.5, {
						css: {autoAlpha:1},
						ease: Power4.easeInOut
					}, -1);

					navStatus = false;

				}

			});

			$(".choc-left").on("click", function() {

				var navStatus = true;

				if (navStatus) {

					var leftChocTL = new TimelineMax();

					leftChocTL.to(".choc-container", 0.5, {
						scrollTo:{x: -pageWidth},
						ease: Power4.easeInOut
					})
					.to(".choc-left", 0.5, {
						css: {autoAlpha:0},
						ease: Power4.easeInOut
					}, -1)
					.to(".choc-right", 0.5, {
						css: {autoAlpha:1},
						ease: Power4.easeInOut
					}, -1);

					navStatus = false;

				}

			});

		}

	}

	// LIGHTBOX FUNCTIONALITY
	function lightBox() {

		if ($("#clicky")) {

			// CLICKY
			$("#clicky").on("click", function() {

				TweenLite.to(["#overlay", "#modal"] , 0.15, {autoAlpha: 1, display: "block"}, Strong.easeInOut);

			});

			// CLICK OVERLAY CLOSE
			$("#overlay").on("click", function() {

				TweenLite.to(["#overlay", "#modal"] , 0.15, {autoAlpha: 0, display: "none"}, Strong.easeInOut);

			});

			// ESCAPE CLOSE
			$(document).on("keyup", function(e) {
					if (e.keyCode == 27) {
						TweenLite.to(["#overlay", "#modal"] , 0.15, {autoAlpha: 0, display: "none"}, Strong.easeInOut);
					}
			});

			// PATTERN CLICK
			$(".pattern").on("click", function(){

				var background = $(this).css("background");
				$("#clicky").css("background", background);
				TweenLite.to(["#overlay", "#modal"] , 0.15, {autoAlpha: 0, display: "none"}, Strong.easeInOut);

			});

		}

	}

	function chocolates() {

		var chocCount = 0;

		var chocolateImages = [
			"assets/img/chocolates/1.jpg",
			"assets/img/chocolates/2.jpg",
			"assets/img/chocolates/3.jpg",
			"assets/img/chocolates/4.jpg",
			"assets/img/chocolates/5.jpg",
			"assets/img/chocolates/6.jpg",
			"assets/img/chocolates/7.jpg",
			"assets/img/chocolates/8.jpg",
			"assets/img/chocolates/9.jpg",
			"assets/img/chocolates/10.jpg",
			"assets/img/chocolates/11.jpg",
			"assets/img/chocolates/12.jpg",
			"assets/img/chocolates/13.jpg",
			"assets/img/chocolates/14.jpg",
			"assets/img/chocolates/15.jpg",
			"assets/img/chocolates/16.jpg",
			"assets/img/chocolates/17.jpg"
		];

		if( chocolate ) {

			$(".choc .hover").on("click", function() {
				chocCount++;
				if (chocCount <= 16) {
					document.getElementById("chocolate-box").src = chocolateImages[chocCount];
				} 
			});

		}

	}

	function homeClick() {

		var favorite = $("#favorite");
		var fall = $("#fall");

		if(favorite) {

			favorite.on("click", function() {
				window.location = "http://russellstover.bradmurphydev.com/tasteprofile";
			});

		}

		if(fall) {

			var mq = window.matchMedia("only screen and (max-width: 768px)");

			if(mq.matches) {
				
				fall.on("click", function() {
					window.location = "http://russellstover.bradmurphydev.com/index.php?page=product-fall";
				});

			}

		}

	}

	function removeItem() {

		var remove = $("#remove");

		if(remove) {

			remove.on("click", function() {
				$(".row-product").css("display", "none");
				$(".row-product-mobile").css("display", "none");
				$(".value").html("$0.00");

			});

		}
	}
 
	// INIT FUNCTION
	function init() {

		// CALL INIT FUNCTIONS
		console.log("rsAPI loaded...");
		homeClick();
		nav();
		lightBox();
		chocolates();
		removeItem();
		slider();

	}

	// PUBLIC FUNCTIONS
	public.init = init;


	// RETURN PUBLIC FUNCTIONS
	return public;

}());

$(document).on("ready", rsAPI.init);
