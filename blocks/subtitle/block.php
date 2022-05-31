<?php

wp_enqueue_script(
    'block-subtitle-js',
    get_template_directory_uri() . '/blocks/subtitle/block.js',
    array( 'wp-blocks' )
);

register_block_type(
    'alumnisgss-theme/block-subtitle',
    [
        'editor_script' => 'block-subtitle-js'
    ]
);