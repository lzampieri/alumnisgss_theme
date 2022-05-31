<?php
    $themenu = wp_get_nav_menu_items( get_nav_menu_locations()[ 'main-menu' ] );
    if( $themenu ) {
        $thereare = [];
        foreach( $themenu as $item ) {
            $thereare[ $item->menu_item_parent ] = true;
        }
        unset( $thereare[ 0 ] );
        ?>
        
        <div
            x-data="{ 'hamburger_open' : false }"
            class="block md:hidden bg-header-bg"> <!-- Mobile version --> 
            <div class="w-full flex flex-row justify-center h-12 py-2" @click=" hamburger_open = !hamburger_open ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path :fill="hamburger_open ? '#cb0014' : '#ffffff'" d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
            </div>
            <ul class="bg-header-bg w-full absolute flex flex-col items-center gap-4 py-4 overflow-hidden min-h-screen origin-top z-40"
                x-show="hamburger_open"
                @click.outside=" hamburger_open = false "

                x-transition:enter="transition ease-out duration-300"
                x-transition:enter-start="scale-y-0"
                x-transition:enter-end="scale-y-100"
                x-transition:leave="transition ease-in duration-300"
                x-transition:leave-start="scale-y-100"
                x-transition:leave-end="scale-y-0"
                >
                <?php foreach( $themenu as $item ) { if( $item->menu_item_parent == 0 ) { ?>
                    <a href="<?php echo $item->url; ?>"
                    class="uppercase font-bold text-header-tx hover:text-details-bg"
                    @mouseover="open_<?php echo $item->ID; ?> = true"
                    @mouseover.away="open_<?php echo $item->ID; ?> = false"
                    >
                        <?php echo apply_filters( 'the_title', $item->title ); ?>
                    </a>
                    <?php foreach( $themenu as $subitem ) { if( $subitem->menu_item_parent == $item->ID ) { ?>
                        <a href="<?php echo $subitem->url; ?>"
                            class="text-sm text-header-tx hover:text-details-bg"
                            >
                            <?php echo apply_filters( 'the_title', $subitem->title ); ?>
                        </a>
                    <?php }} ?>
                <?php } } ?>
            </ul>
        </div>
        <div
            x-data="{ <?php foreach( $themenu as $item ) { echo 'open_' . $item->ID . ': false, hover_' . $item->ID . ': false, '; } ?> }"
            class="hidden md:block"> <!-- Large screen version -->
            <ul class="bg-header-bg flex flex-row justify-end gap-8 px-8 py-4">
            <?php foreach( $themenu as $item ) { if( $item->menu_item_parent == 0 ) { ?>
                <a href="<?php echo $item->url; ?>"
                    class="group"
                    @mouseover="open_<?php echo $item->ID; ?> = true"
                    @mouseover.away="open_<?php echo $item->ID; ?> = false"
                    >
                    <span class="text-sm uppercase font-bold text-header-tx group-hover:text-details-bg"><?php echo apply_filters( 'the_title', $item->title ); ?></span>
                </a>
            <?php }} ?>
            </ul>
            <?php foreach( $themenu as $item ) { if( array_key_exists( $item->ID, $thereare ) ) { ?>
                <ul
                    class="flex flex-row w-full bg-header-bg justify-end gap-8 px-8 py-4 absolute origin-top"
                    x-show="open_<?php echo $item->ID; ?> | hover_<?php echo $item->ID; ?>"
                    
                    x-transition:enter="transition ease-out duration-150"
                    x-transition:enter-start="scale-y-0"
                    x-transition:enter-end="scale-y-100"
                    x-transition:leave="transition ease-in duration-150"
                    x-transition:leave-start="scale-y-100"
                    x-transition:leave-end="scale-y-0"

                    @mouseover="hover_<?php echo $item->ID; ?> = true"
                    @mouseover.away="hover_<?php echo $item->ID; ?> = false" >
                <?php foreach( $themenu as $subitem ) { if( $subitem->menu_item_parent == $item->ID ) { ?>
                    <a href="<?php echo $subitem->url; ?>"
                        class="text-sm text-header-tx hover:text-details-bg"
                        >
                        <?php echo apply_filters( 'the_title', $subitem->title ); ?>
                    </a>
                <?php }} ?>
                </ul>
            <?php }} ?>
        </div>
    <?php }
?>