<?php include('so-includes/so-header.php'); ?>

	<aside class="big-sexy"></aside>

	<article class="half purple">

		<a href="http://russellstover.bradmurphydev.com/main.php">
			<img src="assets/img/logo.png" alt="Logo" id="logo">
		</a>

		<div class="text-wrap">
			<span class="bold-text">taste<br/> profile<br/> quiz</span>
			<span class="thin-text">what are your taste buds trying to tell you?</span>
		</div>

		<img src="assets/img/arrow.png" alt="arrow" class="arrow" smooth-scroll target="intro-two" offset="0">

	</article>

	<article class="half yellow" id="intro-two">

		<div class="text-wrap">
		<span class="thin-text width">Pick what makes your mouth water with joy.</span>
			<span class="bold-text white">happy<br/> clicking!</span>
		</div>

		<img src="assets/img/arrow.png" alt="arrow" class="arrow" smooth-scroll target="answer-0" offset="0">

	</article>

	<div class="full-height" data-ng-controller="rsController">

	  <section class="questions" data-ng-repeat="answer in answers" smooth-scroll id="answer-{{$index}}" target="answer-{{$index + 1}}" offset="0">

	    <div class="answer-wrap">
    	  <div class="answer" data-ng-click="addPoints(1, $index);"><span data-ng-bind="answer.answer1"></span></div>
			</div>
	    <div class="answer-wrap">
	    	<div class="answer" data-ng-click="addPoints(2, $index);"><span data-ng-bind="answer.answer2"></span></div>
	    </div>
	    <div class="answer-wrap">
	    	<div class="answer" data-ng-click="addPoints(3, $index);"><span data-ng-bind="answer.answer3"></span></div>
	    </div>

	    <div class="pager-wrap">
	    	<div class="pager">
	    		<div class="circle-wrap">
	    			<div class="circle" smooth-scroll target="answer-0" offset="0"></div>
	    		</div>
	    		<div class="circle" smooth-scroll target="answer-1" offset="0"></div>
	    		<div class="circle" smooth-scroll target="answer-2" offset="0"></div>
	    		<div class="circle" smooth-scroll target="answer-3" offset="0"></div>
	    		<div class="circle" smooth-scroll target="answer-4" offset="0"></div>
	    		<div class="circle" smooth-scroll target="answer-5" offset="0"></div>
	    		<div class="circle" smooth-scroll target="answer-6" offset="0"></div>
	    		<div class="circle" smooth-scroll target="answer-7" offset="0"></div>
	    		<div class="circle" smooth-scroll target="answer-8" offset="0"></div>
	    		<div class="circle" smooth-scroll target="answer-9" offset="0"></div>
	    	</div>
	    </div>

	  </section>

		<section id="answer-{{answers.length}}" class="full-height">
			
			<article id="no-result">
				<h1>Oops, looks like you haven't finished yet!</h1>
			</article>

			<article class="result results-height savory" id="savory">
				<div class="heading savory">

						<div class="v-align">
							<img src="assets/img/text-savory.png" alt="Savory">
						</div>

				</div>
				<div class="content">
					<a href="http://russellstover.bradmurphydev.com/main.php?page=product-savory"><img src="assets/img/arrow.png" class="arrow" alt="Arrow"></a>
					<aside class="left">
						<h1 class="savory">better<br/> with<br/> butter</h1>
					</aside>
					<div class="right">
						<p>Red wine for dinner is a must. 
						But what’s not so easy to decide 
						is what to get for an entree: steak, 
						duck, or lobster? Today, you’ll go 
						with duck because the Barbour 
						you’re wearing is perfect for 
						hunting duck--that’s if you even 
						knew the first thing about hunting. </p>
					</div>
				</div>
			</article>
			<article class="result full-height sweet" id="sweet">
				<div class="heading sweet">

						<div class="v-align">
							<img src="assets/img/text-sweet.png" alt="Sweet">
						</div>

				</div>
				<div class="content">
					<a href="http://russellstover.bradmurphydev.com/main.php?page=product-sweet"><img src="assets/img/arrow.png" class="arrow" alt="Arrow"></a>
					<aside class="left">
						<h1 class="sweet">extra<br/> cube of<br/> sugar</h1>
					</aside>
					<div class="right">
						<p>Not having butter on pancakes is 
						unfortunate. Not having syrup? 
						Blasphemous. But, you’ve learned 
						to not let such misfortunes get to 
						you. Instead of sulking all day, you 
						now always carry sweets in your 
						pocket just in case of an emergency.</p>
					</div>
				</div>
			</article>

			<article class="result full-height spicy" id="spicy">
				<div class="heading spicy">

						<div class="v-align">
							<img src="assets/img/text-spicy.png" alt="Spicy">
						</div>

				</div>
				<div class="content">
					<a href="http://russellstover.bradmurphydev.com/main.php?page=product-spicy"><img src="assets/img/arrow.png" class="arrow" alt="Arrow"></a>
					<aside class="left">
						<h1 class="spicy">pass<br/> the<br/> milk</h1>
					</aside>
					<div class="right">
						<p>Your remedy for congestion has always 
						been wasabi peas and habanero sauce. 
						Together. You have more hot sauce in 
						your cabinet than cold medicine. And 
						regardless of any pain you might suffer 
						from trying a daring dish, you’ll be sure 
						to reach for the Tobasco at the very 
						next meal.</p>
					</div>
				</div>
			</article>

			<article class="result full-height salty" id="salty">
				<div class="heading salty">

						<div class="v-align">
							<img src="assets/img/text-salty.png" alt="Salty">
						</div>

				</div>
				<div class="content">
					<a href="http://russellstover.bradmurphydev.com/main.php?page=product-salty"><img src="assets/img/arrow.png" class="arrow" alt="Arrow"></a>
					<aside class="left">
						<h1 class="salty">a pinch<br/> over the<br/> shoulder</h1>
					</aside>
					<div class="right">
						<p>While most kids hated getting 
						pretzels on Halloween, it was 
						the motherload to you. Even 
						now, it’s your go-to snack. All 
						you need after that is a glass of 
						Scotch and Miles Davis playing 
						in the background to make it 
						a perfect evening.</p>
					</div>
				</div>
			</article>
			

		</section>

	</div>
	
<?php include('so-includes/so-footer.php'); ?>		
