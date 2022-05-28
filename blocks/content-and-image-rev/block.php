<?php

wp_enqueue_script(
    'block-content-and-image-rev-js',
    get_template_directory_uri() . '/blocks/content-and-image-rev/block.js',
    array( 'wp-blocks' )
);
register_block_type(
    'alumnisgss-theme/content-and-image-rev',
    [ 'editor_script' => 'block-content-and-image-rev-js' ]
);