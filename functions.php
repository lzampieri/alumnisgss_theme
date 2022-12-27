<?php
// Init
function alumnisgss_init() {

    // Register menù
    register_nav_menus(
        array(
            'main-menu' => 'Menù principale',
            'footer-menu' => 'Piè di pagina'
            )
    );
}
add_action( 'init', 'alumnisgss_init' );

// Css and Js
function add_theme_scripts() {
    wp_enqueue_style( 'alumnisgss', get_template_directory_uri() . '/assets/app.css' );
    wp_enqueue_script( 'alumnisgss', get_template_directory_uri() . '/assets/app.js' );
}
add_action( 'wp_enqueue_scripts', 'add_theme_scripts' );

function add_theme_features() {
    add_theme_support( 'title-tag' );
}
add_action( 'after_setup_theme', 'add_theme_features' );

require('func/features.php');
require('func/socials.php');
require('func/buttons.php');
require('blocks/load_blocks.php');