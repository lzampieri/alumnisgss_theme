<?php get_template_part('parts/header'); ?>

<?php get_template_part('parts/home_header'); ?>

<?php get_template_part('parts/navigation'); ?>

<?php if ( have_posts() ) {
    echo <<<HTML
    <div class="carousel-row">
        <ul class="carousel-ul">
    HTML;
    
    while( have_posts() ) {
        the_post( );

        echo '<a href="';
        the_permalink( );
        echo '" class="carousel-item group" >';
        
        $image = get_the_post_thumbnail_url( );
        if( $image ) {
            echo '<img class="w-1/3 md:w-full max-h-40 grayscale group-hover:grayscale-0" src="' . $image . '" />';
        } else  {
            echo '<img class="w-1/3 md:w-full max-h-40 block group-hover:hidden" src="' . get_template_directory_uri() . '/assets/logo_background.svg" />';
            echo '<img class="w-1/3 md:w-full max-h-40 hidden group-hover:block" src="' . get_template_directory_uri() . '/assets/logo_contrast.svg" />';
        }

        echo '<span class="carousel-title">';
        the_title( );
        echo '</span></a>';
    }

    echo '</ul></div>';


} ?>


<?php get_template_part('parts/navigation_bottom'); ?>

<?php get_template_part('parts/footer'); ?>