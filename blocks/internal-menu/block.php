<?php

wp_enqueue_script(
    'block-internal-menu-js',
    get_template_directory_uri() . '/blocks/internal-menu/block.js',
    array( 'wp-blocks' )
);

require( __DIR__ . '/renderer.php' );
register_block_type(
    'alumnisgss-theme/block-internal-menu',
    [
        'editor_script' => 'block-internal-menu-js',
        'render_callback' => 'internal_menu_renderer',
        'attributes' => [ 'menuId' => [ 'type' => 'number' ], ]
    ]
);