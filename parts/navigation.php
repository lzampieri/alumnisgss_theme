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
            x-data="{ <?php foreach( $themenu as $item ) { echo 'open_' . $item->ID . ': false, hover_' . $item->ID . ': false, '; } ?> }"
        >
        <span class="block md:hidden"> <!-- Mobile version -->
            <ul class="bg-light-bg center flex flex-col justify-center items-center gap-2">
            <?php foreach( $themenu as $item ) { if( $item->menu_item_parent == 0 ) { ?>
                <a href="<?php echo $item->url; ?>"
                    class="w-full
                        shadow-dark-bg hover:shadow-2xl
                        text-base text-light-tx text-center py-2"
                    :class="hover_<?php echo $item->ID; ?> ? 'shadow-2xl' : 'shadow-md'"
                    @mouseover="open_<?php echo $item->ID; ?> = true"
                    @mouseover.away="open_<?php echo $item->ID; ?> = false"
                    >
                    <?php echo apply_filters( 'the_title', $item->title ); ?>
                </a>
                <ul
                    class="bg-light-bg center flex flex-col justify-center gap-2"
                    x-show="open_<?php echo $item->ID; ?> | hover_<?php echo $item->ID; ?>"
                    
                    x-transition:enter="transition ease-out duration-150"
                    x-transition:enter-start="opacity-0"
                    x-transition:enter-end="opacity-100"
                    x-transition:leave="transition ease-in duration-150"
                    x-transition:leave-start="opacity-100"
                    x-transition:leave-end="opacity-0"

                    @mouseover="hover_<?php echo $item->ID; ?> = true"
                    @mouseover.away="hover_<?php echo $item->ID; ?> = false" >
                    <?php foreach( $themenu as $subitem ) { if( $subitem->menu_item_parent == $item->ID ) { ?>
                        <a href="<?php echo $subitem->url; ?>"
                            class="
                                shadow-dark-bg shadow-md hover:shadow-2xl
                                text-base text-light-tx text-center px-2"
                            >
                            <?php echo apply_filters( 'the_title', $subitem->title ); ?>
                        </a>
                    <?php }} ?>
                </ul>
            <?php }} ?>
            </ul>
        </span>
        <span class="hidden md:block"> <!-- Large screen version -->
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
                    class="flex flex-row w-full bg-header-bg justify-end gap-8 px-8 py-4 absolute"
                    x-show="open_<?php echo $item->ID; ?> | hover_<?php echo $item->ID; ?>"
                    
                    x-transition:enter="transition ease-out duration-150"
                    x-transition:enter-start="opacity-0"
                    x-transition:enter-end="opacity-100"
                    x-transition:leave="transition ease-in duration-150"
                    x-transition:leave-start="opacity-100"
                    x-transition:leave-end="opacity-0"

                    @mouseover="hover_<?php echo $item->ID; ?> = true"
                    @mouseover.away="hover_<?php echo $item->ID; ?> = false" >
                <?php foreach( $themenu as $subitem ) { if( $subitem->menu_item_parent == $item->ID ) { ?>
                    <a href="<?php echo $subitem->url; ?>"
                        class="text-header-tx hover:text-details-bg"
                        >
                        <?php echo apply_filters( 'the_title', $subitem->title ); ?>
                    </a>
                <?php }} ?>
                </ul>
            <?php }} ?>
        </span>
        </div>
    <?php }
?>