<?php

wp_enqueue_script(
    'block-cit-js',
    get_template_directory_uri() . '/blocks/cit/block.js',
    array( 'wp-blocks' )
);

wp_localize_script( 
    'block-cit-js', 
    'alumnisgssThemeBlockCitVars',
    [ 'templateDirectoryUri' => get_template_directory_uri() ]
);

register_block_type(
    'alumnisgss-theme/block-cit',
    [
        'editor_script' => 'block-cit-js'
    ]
);