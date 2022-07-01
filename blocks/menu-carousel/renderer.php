<?php

function menu_carousel_renderer( $attr, $content ) {
    if( !array_key_exists( 'menuId', $attr ) || $attr['menuId'] == 0  ) {
        return " ";
    }
    $menu = wp_get_nav_menu_items( $attr['menuId'] );
    
    $output = "";
    if( $menu ) {
        $output = <<<HTML
        <div class="carousel-row">
            <ul class="carousel-ul">
HTML;
        
        foreach( $menu as $item ) {
            if( $item->menu_item_parent == 0 ) {
                $output .= '<a href="' .$item->url . '" class="carousel-item group" >';
                
                $output .= '<img class="w-1/3 md:w-full max-h-40 block group-hover:hidden" src="' . get_template_directory_uri() . '/assets/logo_background.svg" />';
                $output .= '<img class="w-1/3 md:w-full max-h-40 hidden group-hover:block" src="' . get_template_directory_uri() . '/assets/logo_contrast.svg" />';

                $output .= '<span class="carousel-title">' . apply_filters('the_title', $item->title ) . '</span>';
                $output .= '</a>';
            }
        }
        $output .= '</ul></div>';
    }

    return $output;
}