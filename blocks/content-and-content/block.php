<?php

wp_enqueue_script(
    'block-content-and-content-js',
    get_template_directory_uri() . '/blocks/content-and-content/block.js',
    array( 'wp-blocks' )
);
register_block_type(
    'alumnisgss-theme/content-and-content',
    [ 'editor_script' => 'block-content-and-content-js' ]
);