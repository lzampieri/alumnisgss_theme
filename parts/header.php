<!DOCTYPE html>

<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1.0" >
		<?php wp_head(); ?>
		<!-- css and js are registered in functions.php -->
		<script defer src="https://unpkg.com/alpinejs@3.9.0/dist/cdn.min.js"></script> <!-- AlpineJs -->
	</head>
	<body
	class="bg-body-bg bg-no-repeat bg-contain bg-fixed"
    style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/homepage_background_dark.svg')">

	<!-- Facebook script (manually added to prevent async defer and various attrs. chaos) -->
	<script async defer crossorigin="anonymous" src="https://connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v14.0&appId=1002740130399465&autoLogAppEvents=1" nonce="IEm3hQBF"></script>