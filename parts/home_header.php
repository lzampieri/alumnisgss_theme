<div class="
    flex flex-col items-center justify-center
    h-screen 
    ">
    <div class="
        flex items-center gap-4
        flex-col md:flex-row
        md:h-4/6
        w-full md:w-4/6
        ">
        <span class="text-dark-tx grow basis-0">
            <h1 class="text-4xl md:text-7xl font-bold"><?php echo str_replace( " ", "<br />", get_bloginfo('name') ); ?></h1>
            <?php if( !empty( get_bloginfo('description') ) ) { ?>
                <h4 class="text-xl md:text-2xl pb-4 text-light-bg mt-3"><?php echo get_bloginfo('description'); ?> </h4>
            <?php } ?>
        </span> 
        <span class="separator"></span>
        <span class="grow basis-0 h-full aspect-square">
            <img class="h-full" src="<?php echo get_template_directory_uri(); ?>/assets/logo_contrast.svg" />
        </span>
    </div>
</div>