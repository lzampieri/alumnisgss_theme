<?php

function internal_menu_renderer( $attr, $content ) {
    if( !array_key_exists( 'menuId', $attr ) || $attr['menuId'] == 0  ) {
        return " ";
    }
    $menu = wp_get_nav_menu_items( $attr['menuId'] );
    foreach( $menu as $item ) {
        $thereare[ $item->menu_item_parent ] = true;
    }
    unset( $thereare[ 0 ] );

    $key = uniqid();

    $apply_filters = 'apply_filters';

    $output = "";
    
    if( $menu ) {
        $output .= <<<HTML
        <div class="flex flex-row justify-center w-full py-8">
            <div class="block md:hidden" x-data="{ 'hamburger_open_{$key}' : false }"> <!-- Mobile version -->
                <div class="w-full flex flex-row justify-center" @click=" hamburger_open_{$key} = !hamburger_open_{$key} ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="bg-header-bg h-10 w-10 p-2"><path :fill="hamburger_open_{$key} ? '#cb0014' : '#ffffff'"  d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
                </div>
                <div
                    class="
                        flex flex-row justify-center w-full
                        transition-scale duration-300 ease-in-out origin-top absolute overflow-hidden left-0 right-0 z-40"
                    :class="hamburger_open_{$key} ? 'scale-y-100' : 'scale-y-0'">
                    <ul class="bg-header-bg flex flex-col items-center py-4 gap-2 px-8">
HTML;
                        foreach( $menu as $item ) { if( $item->menu_item_parent == 0 ) {
                            $output .= <<<HTML
                            <a href="{$item->url}">
                                <span class="text-sm uppercase font-bold text-header-tx hover:text-details-bg no-underline">{$apply_filters( 'the_title', $item->title )}</span>
                            </a>
HTML;
                            foreach( $menu as $subitem ) { if( $subitem->menu_item_parent == $item->ID ) {
                                $output .= <<<HTML
                                    <a href="{$subitem->url}" >
                                        <span class="text-sm text-header-tx hover:text-details-bg no-underline">{$apply_filters(  'the_title', $subitem->title )}</span>
                                </a>
HTML;
                            } }
                        } }
        $output .= <<<HTML
                    </ul>
                </div>
            </div>
            <div class="hidden md:block"> <!-- Large screen version -->
                <ul class="bg-header-bg flex flex-row justify-center gap-8 px-8">
HTML;
                    foreach( $menu as $item ) { if( $item->menu_item_parent == 0 ) {
                        $output .= <<<HTML
                            <div 
                            class="group py-4"
                            >
                                <a href="{$item->url}" class="text-sm uppercase font-bold text-header-tx group-hover:text-details-bg no-underline">{$apply_filters( 'the_title', $item->title )}</a>
HTML;
                        if( array_key_exists( $item->ID, $thereare ) ) {
                            $output .= <<<HTML
                                <div class="
                                    scale-y-0 hover:scale-y-100 group-hover:scale-y-100 absolute overflow-hidden origin-top
                                    transition-scale duration-300 ease-in-out
                                    bg-header-bg
                                    flex flex-col gap-4">
HTML;
                                foreach( $menu as $subitem ) { if( $subitem->menu_item_parent == $item->ID ) {
                                    $output .= <<<HTML
                                        <a href="{$subitem->url}" class="text-sm text-header-tx hover:text-details-bg first:pt-4 last:pb-4 px-8 no-underline">{$apply_filters( 'the_title', $subitem->title )}</a>
HTML;
                                    } }
                            $output .= "</div>";
                        }
                        $output .= "</div>";
                    } }
        $output .= <<<HTML
                </ul>
            </div>
        </div>
HTML;
    }

    return $output;
}