<?php

wp_enqueue_script(
    'block-content-and-content-thecontent-js',
    get_template_directory_uri() . '/blocks/content-and-content-thecontent/block.js',
    array( 'wp-blocks' )
);
register_block_type(
    'alumnisgss-theme/content-and-content-thecontent',
    [ 'editor_script' => 'block-content-and-content-thecontent-js' ]
);