<?php

wp_enqueue_script(
    'block-button-js',
    get_template_directory_uri() . '/blocks/button/block.js',
    array( 'wp-blocks' )
);

register_block_type(
    'alumnisgss-theme/block-button',
    [
        'editor_script' => 'block-button-js'
    ]
);