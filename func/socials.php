<?php

function alumnisgss_socials_register_option( $wp_customize ) {
    
    $socials_list = array('facebook', 'instagram', 'twitter', 'linkedin', 'telegram', 'tiktok', 'whatsapp', 'youtube');
    update_option( 'alumnisgss_socials_list', implode( ', ', $socials_list ) );

    foreach( $socials_list as $s ) {
        $wp_customize->add_setting(
            'alumnisgss_socials_link_' . $s,
            array(
                'default' => '',
                'type' => 'option',
                'capability' => 'edit_theme_options'
            )
        );
    }
    $wp_customize->add_setting(
        'alumnisgss_socials_email',
        array(
            'default' => '',
            'type' => 'option',
            'capability' => 'edit_theme_options'
        )
    );
    $wp_customize->add_setting(
        'alumnisgss_socials_footnote',
        array(
            'default' => '',
            'type' => 'option',
            'capability' => 'edit_theme_options'
        )
    );

    $wp_customize->add_section( new WP_Customize_Section(
        $wp_customize,
        'alumnisgss_socials',
        array(
            'title'     => 'Social',
            'description' => ''
        )
    ));

    foreach( $socials_list as $s ) {
        $wp_customize->add_control( new WP_Customize_Control(
            $wp_customize,
            'alumnisgss_socials_link_' . $s,
            array(
                'label'      => 'Link per ' . $s,
                'description' => '',
                'settings'   => 'alumnisgss_socials_link_' . $s,
                'priority'   => 0,
                'section'    => 'alumnisgss_socials',
                'type'       => 'text',
            )
        ) );
    }
    $wp_customize->add_control( new WP_Customize_Control(
        $wp_customize,
        'alumnisgss_socials_email',
        array(
            'label'      => 'Indirizzo mail',
            'description' => '',
            'settings'   => 'alumnisgss_socials_email',
            'priority'   => 0,
            'section'    => 'alumnisgss_socials',
            'type'       => 'text',
        )
    ) );
    $wp_customize->add_control( new WP_Customize_Control(
        $wp_customize,
        'alumnisgss_socials_footnote',
        array(
            'label'      => 'P. Iva e note finali',
            'description' => '',
            'settings'   => 'alumnisgss_socials_footnote',
            'priority'   => 0,
            'section'    => 'alumnisgss_socials',
            'type'       => 'textarea',
        )
    ) );
}
add_action( 'customize_register', 'alumnisgss_socials_register_option' );
