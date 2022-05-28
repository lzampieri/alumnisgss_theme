<?php

wp_enqueue_script(
    'block-menu-carousel-js',
    get_template_directory_uri() . '/blocks/menu-carousel/block.js',
    array( 'wp-blocks' )
);

require( __DIR__ . '/renderer.php' );
register_block_type(
    'alumnisgss-theme/block-menu-carousel',
    [
        'editor_script' => 'block-menu-carousel-js',
        'render_callback' => 'menu_carousel_renderer',
        'attributes' => [ 'menuId' => [ 'type' => 'number' ], ]
    ]
);