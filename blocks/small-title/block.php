<?php

wp_enqueue_script(
    'block-small-title-js',
    get_template_directory_uri() . '/blocks/small-title/block.js',
    array( 'wp-blocks' )
);

register_block_type(
    'alumnisgss-theme/block-small-title',
    [
        'editor_script' => 'block-small-title-js'
    ]
);