<?php
$themenu = wp_get_nav_menu_items( get_nav_menu_locations()[ 'footer-menu' ] );

$socialslist = explode( ', ', get_option( "alumnisgss_socials_list" ) );

?>
<div class="w-full bg-light-bg grid grid-cols-1 md:grid-cols-4 px-8 py-16 mt-32">
    <ul class="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3">
    <?php
        if( $themenu ) {
            foreach( $themenu as $item ) {
                if( $item->menu_item_parent == 0 ) { ?>
                    <div class="pb-4">
                        <a href="<?php echo $item->url; ?>">
                            <h5 class="text-lg font-bold underline"><?php echo apply_filters( 'the_title', $item->title ); ?></h5>
                        </a>
                        <?php
                            foreach( $themenu as $subitem ) {
                                if( $subitem->menu_item_parent == $item->ID ) { ?>
                                    <a href="<?php echo $subitem->url; ?>" class="no-underline">
                                        <?php echo apply_filters( 'the_title', $subitem->title ); ?>
                                    </a><br/>
                                <?php } ?>
                            <?php } ?>
                    </div>
                <?php } ?>
            <?php } ?>
        <?php } ?>
    </ul>
    <div>
        <img class="w-full pb-4" src="<?php echo get_template_directory_uri(); ?>/assets/logo_footer.svg" />
        <ul class="w-full flex flex-row flex-wrap justify-center gap-3">
            <?php
            foreach( $socialslist as $s ) {
                $link = get_option( 'alumnisgss_socials_link_' . $s, '' );
                if( strlen( $link ) > 0 ) {
                    ?>
                    <a class="
                        aspect-square w-8
                        bg-no-repeat bg-cover bg-center
                        no-underline
                        "
                        style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/social/<?php echo $s; ?>.svg')"
                        href="<?php echo $link; ?>"
                        ></a>
                    <?php
                }
            }
            ?>
        </ul>
        <?php
            $email = get_option( 'alumnisgss_socials_email', '' );
            $footnote = get_option( 'alumnisgss_socials_footnote', '' );
            if( strlen( $email ) + strlen( $footnote ) > 0 ) {
                ?>
                <p class="w-full text-center py-4">
                    <a class="underline" href="mailto:<?php echo $email; ?>">
                        <?php echo $email; ?>
                    </a>
                    <?php if( strlen( $email ) * strlen( $footnote ) > 0 ) echo "<br/>"; ?>
                    <?php echo nl2br($footnote); ?>
                </p>
                <?php
            }
        ?>
    </div>
</div>
<ul class="w-full bg-light-bg text-center px-8 pb-4">
    <?php echo get_option( "alumnisgss_footer_tagline" ); ?>
</ul>