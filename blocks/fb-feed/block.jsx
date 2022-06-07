( function ( blocks, element ) {
 
    blocks.registerBlockType( 'alumnisgss-theme/block-fb-feed', {
        // apiVersion: 2,
        title: "Feed di Facebook",
        name: "alumnisgss-theme/block-fb-feed",
        category: "theme",
        attributes: {
        },
        icon: "facebook",
        edit: function ( props ) {
            return (
                <div class="w-full text-center text-lg">
                    Qui verrà mostrato il feed di Facebook
                </div>
            )
        },
        save: function ( props ) {
            return (
                <div class="w-full fb-page" data-href="https://www.facebook.com/AlumniScuolaGalileiana" data-tabs="timeline" data-width="500" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/AlumniScuolaGalileiana" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/AlumniScuolaGalileiana">Alumni Scuola Galileiana di Studi Superiori</a></blockquote></div>
            )
        },
    } );
} )( window.wp.blocks, window.wp.element );