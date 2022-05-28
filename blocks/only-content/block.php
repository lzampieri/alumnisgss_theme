<?php

wp_enqueue_script(
    'block-only-content-js',
    get_template_directory_uri() . '/blocks/only-content/block.js',
    array( 'wp-blocks' )
);
register_block_type(
    'alumnisgss-theme/only-content',
    [ 'editor_script' => 'block-only-content-js' ]
);