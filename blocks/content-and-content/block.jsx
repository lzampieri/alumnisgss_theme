( function ( blocks, element ) {
    var el = element.createElement;
 
    blocks.registerBlockType( 'alumnisgss-theme/block-content-and-content', {
        // apiVersion: 2,
        title: "Sezione: doppio contenuto",
        name: "alumnisgss-theme/block-content-and-content",
        category: "theme",
        attributes: {
            theme: {
                type: 'string',
                default: 'dark'
            },
        },
        icon: "columns",
        edit: function ( props ) {
            const innerBlocksProps = wp.blockEditor.useInnerBlocksProps( wp.blockEditor.useBlockProps({
                className: 'two-cols-intraflex',
            } ), {
                allowedBlocks: [ 'alumnisgss-theme/block-content-and-content-thecontent', 'alumnisgss-theme/block-content-and-content-theseparator' ],
                template: [
                    ['alumnisgss-theme/block-content-and-content-thecontent'],
                    ['alumnisgss-theme/block-content-and-content-theseparator'],
                    ['alumnisgss-theme/block-content-and-content-thecontent']
                ],
                renderAppender: false
            } );
            
            const theme_labels = {
                'dark': 'Scuro',
                'light': 'Chiaro'
            }
            const section_classes = {
                'dark': 'section-dark',
                'light': 'section-light'
            }

            return ( 
                <div className={'content-and-content-flex ' + section_classes[ props.attributes.theme ] }>
                    <div { ...innerBlocksProps }>
                    </div>
                </div>
            )
        },
        save: function ( props ) {
            const section_classes = {
                'dark': 'section-dark',
                'light': 'section-light'
            }

            const blockProps = wp.blockEditor.useBlockProps.save({
                className: 'two-cols-intraflex',
            })

            const innerBlocksProps = wp.blockEditor.useInnerBlocksProps.save(blockProps);

            return ( 
                <div className={'two-cols-flex ' + section_classes[ props.attributes.theme ] }>
                    <div { ...innerBlocksProps }>
                    </div>
                </div>
            )
        },
    } );
} )( window.wp.blocks, window.wp.element );