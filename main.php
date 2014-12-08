<?php include('so-includes/so-header.php'); ?>

<section>
	
	<div class="main-wrap">
		<?php 
		$filename = 'so-includes/content/'; // . page . '.php'
		$fourohfour = $filename . '404.php';
		$home_page = $filename . 'home.php';
		if (isset($_GET['page'])) {
			$filename = $filename . $_GET['page'] . '.php';
			if (file_exists($filename)) {
				$page = $filename;
			} else {
				$page = $fourohfour;
			}
			// $page = $_GET['page'];
		} else {
			$page = $home_page;
		}
		include($page); ?>
	</div>

</section>
	
<?php include('so-includes/so-main-footer.php'); ?>		
