( function ( blocks, element ) {
    var el = element.createElement;
 
    blocks.registerBlockType( 'alumnisgss-theme/block-only-content', {
        // apiVersion: 2,
        title: "Sezione: solo contenuto",
        name: "alumnisgss-theme/block-only-content",
        category: "theme",
        attributes: {
            content: {
                type: 'string',
                default: ''
            },
            direction: {
                type: 'integer',
                default: 'right'
            }
        },
        icon: "editor-justify",
        edit: function ( props ) {
            const blockProps = wp.blockEditor.useBlockProps();

            const theme_labels = {
                'dark': 'Scuro',
                'light': 'Chiaro'
            }
            const section_classes = {
                'dark': 'section-dark',
                'light': 'section-light'
            }

            return ( 
                <div
                    className={'only-content-flex ' + section_classes[ props.attributes.theme ] }>
                    <span className="separator"></span>
                        <div className="only-content-content" { ...blockProps }>
                            <wp.components.DropdownMenu
                                icon="color-picker"
                                controls={ Object.keys( theme_labels ).map( ( k,i ) => { return {
                                    title: theme_labels[ k ],
                                    onClick: () => props.setAttributes( { theme: k } )
                                } } ) }
                            />
                            <wp.blockEditor.RichText
                                className="text-center"
                                value={ props.attributes.content }
                                onChange = { ( content ) => { props.setAttributes( { content: content } ); } }
                                placeholder="Contenuto..."
                            />
                            <wp.blockEditor.InnerBlocks />
                        </div>
                    <span className="separator"></span>
                </div>
            )
        },
        save: function ( props ) {
            const blockProps = wp.blockEditor.useBlockProps.save();
            const section_classes = {
                'dark': 'section-dark',
                'light': 'section-light'
            }

            return ( 
                <div className={'only-content-flex ' + section_classes[ props.attributes.theme ] }>
                    <span className="separator"></span>
                    <span className="only-content-content">
                        <wp.blockEditor.RichText.Content
                            tagName="div"
                            className="text-center"
                            value={ props.attributes.content }
                            />
                        <wp.blockEditor.InnerBlocks.Content { ...blockProps } />
                    </span>
                    <span className="separator"></span>
                </div>
            )
        },
    } );
} )( window.wp.blocks, window.wp.element );