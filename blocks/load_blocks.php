<?php

function alumnisgss_blocks_register() {
    require( __DIR__ . '/only-content/block.php' );
    require( __DIR__ . '/only-image/block.php' );
    require( __DIR__ . '/content-and-image/block.php' );
    require( __DIR__ . '/content-and-image-rev/block.php' );
    require( __DIR__ . '/menu-carousel/block.php' );
    require( __DIR__ . '/category-carousel/block.php' );
    require( __DIR__ . '/small-title/block.php' );
    require( __DIR__ . '/button/block.php' );
    require( __DIR__ . '/cit/block.php' );
}

add_action( 'init', 'alumnisgss_blocks_register' );

function alumnisgss_blocks_css() {
    wp_enqueue_style(
        'alumnisgss-blocks-css',
        wp_enqueue_style( 'app', get_template_directory_uri() . '/assets/app.css' )
    );
}

add_action( 'enqueue_block_editor_assets', 'alumnisgss_blocks_css' );