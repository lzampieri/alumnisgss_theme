<?php get_template_part('parts/header'); ?>

<?php get_template_part('parts/home_header'); ?>

<?php get_template_part('parts/navigation'); ?>

<?php if ( have_posts() ) {
    while ( have_posts() ) {
        the_post();
        
        get_template_part('parts/title');
        
        get_template_part('parts/content');

    }
} ?>


<?php get_template_part('parts/navigation_bottom'); ?>

<?php get_template_part('parts/footer'); ?>