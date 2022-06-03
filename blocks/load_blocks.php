<?php

function alumnisgss_blocks_register() {
    require( __DIR__ . '/only-content/block.php' );
    require( __DIR__ . '/only-image/block.php' );
    require( __DIR__ . '/content-and-image/block.php' );
    require( __DIR__ . '/menu-carousel/block.php' );
    require( __DIR__ . '/category-carousel/block.php' );
    require( __DIR__ . '/small-title/block.php' );
    require( __DIR__ . '/subtitle/block.php' );
    require( __DIR__ . '/button/block.php' );
    require( __DIR__ . '/cit/block.php' );
    require( __DIR__ . '/internal-menu/block.php' );
}

add_action( 'init', 'alumnisgss_blocks_register' );

function alumnisgss_blocks_add_menu_page() {
    require( __DIR__ . '/alumnisgss_blocks_settings_display.php' );
    add_menu_page( 'Istruzioni', 'Istruzioni', 'manage_options', 'alumnisgss_blocks_settings', 'alumnisgss_blocks_settings_display', 'dashicons-info', 1 );
}

add_action( 'admin_menu', 'alumnisgss_blocks_add_menu_page' );

function alumnisgss_blocks_css() {
    wp_enqueue_style(
        'alumnisgss-blocks-css',
        wp_enqueue_style( 'app', get_template_directory_uri() . '/assets/app.css' )
    );
}

add_action( 'enqueue_block_editor_assets', 'alumnisgss_blocks_css' );