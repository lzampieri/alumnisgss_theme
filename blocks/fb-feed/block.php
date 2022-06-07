<?php

wp_enqueue_script(
    'block-fb-feed-js',
    get_template_directory_uri() . '/blocks/fb-feed/block.js',
    array( 'wp-blocks' )
);

register_block_type(
    'alumnisgss-theme/block-fb-feed',
    [
        'editor_script' => 'block-fb-feed-js'
    ]
);