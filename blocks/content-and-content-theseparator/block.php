<?php

wp_enqueue_script(
    'block-content-and-content-theseparator-js',
    get_template_directory_uri() . '/blocks/content-and-content-theseparator/block.js',
    array( 'wp-blocks' )
);
register_block_type(
    'alumnisgss-theme/content-and-content-theseparator',
    [ 'editor_script' => 'block-content-and-content-theseparator-js' ]
);