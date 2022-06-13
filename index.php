<?php get_template_part('parts/header'); ?>

<?php get_template_part('parts/normal_header'); ?>

<?php get_template_part('parts/navigation'); ?>

<?php if ( have_posts() ) {
    while ( have_posts() ) {
        the_post();
        
        get_template_part('parts/title');
        
        if( post_password_required() )
            get_template_part('parts/require_password');
        else
            get_template_part('parts/content');

    }
} ?>


<?php get_template_part('parts/navigation_bottom'); ?>

<?php get_template_part('parts/footer'); ?>