<?php

wp_enqueue_script(
    'block-only-image-js',
    get_template_directory_uri() . '/blocks/only-image/block.js',
    array( 'wp-blocks' )
);
register_block_type(
    'alumnisgss-theme/only-image',
    [ 'editor_script' => 'block-only-image-js' ]
);