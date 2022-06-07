( function ( blocks, element ) {
    var el = element.createElement;
 
    blocks.registerBlockType( 'alumnisgss-theme/block-content-and-content-theseparator', {
        // apiVersion: 2,
        title: "Separatore",
        name: "alumnisgss-theme/block-content-and-content-theseparator",
        parent: ["alumnisgss-theme/block-content-and-content"],
        category: "theme",
        icon: "columns",
        edit: function ( props ) {
            return ( 
                <span class="separator"></span>
            )
        },
        save: function ( props ) {
            return ( 
                <span class="separator"></span>
            )
        },
    } );
} )( window.wp.blocks, window.wp.element );