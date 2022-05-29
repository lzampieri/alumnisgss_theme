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
        },
        icon: "editor-justify",
        edit: function ( props ) {
            const blockProps = wp.blockEditor.useBlockProps();

            return ( 
                <div
                    className="only-content-flex">
                    <span className="separator"></span>
                        <div className="only-content-content" { ...blockProps }>
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

            return ( 
                <div className="only-content-flex">
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