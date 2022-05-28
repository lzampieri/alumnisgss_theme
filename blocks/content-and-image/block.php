<?php

wp_enqueue_script(
    'block-content-and-image-js',
    get_template_directory_uri() . '/blocks/content-and-image/block.js',
    array( 'wp-blocks' )
);
register_block_type(
    'alumnisgss-theme/content-and-image',
    [ 'editor_script' => 'block-content-and-image-js' ]
);