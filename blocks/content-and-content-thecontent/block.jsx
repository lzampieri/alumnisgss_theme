( function ( blocks, element ) {
    var el = element.createElement;
 
    blocks.registerBlockType( 'alumnisgss-theme/block-content-and-content-thecontent', {
        // apiVersion: 2,
        title: "Contenuto",
        name: "alumnisgss-theme/block-content-and-content-thecontent",
        parent: ["alumnisgss-theme/block-content-and-content"],
        category: "theme",
        attributes: {
            content: {
                type: 'string',
                default: ''
            }
        },
        icon: "columns",
        edit: function ( props ) {
            const blockProps = wp.blockEditor.useBlockProps();

            return ( 
                <div className="two-cols-content">
                    <wp.blockEditor.RichText
                        value={ props.attributes.content }
                        onChange = { ( content ) => { props.setAttributes( { content: content } ); } }
                        placeholder="Contenuto..."
                    />
                    <wp.blockEditor.InnerBlocks />
                </div>
            )
        },
        save: function ( props ) {
            const blockProps = wp.blockEditor.useBlockProps.save();

            return ( 
                <div className="two-cols-content">
                    <wp.blockEditor.RichText.Content
                        tagName="div"
                        value={ props.attributes.content }
                        />
                    <wp.blockEditor.InnerBlocks.Content />
                </div>
            )
        },
    } );
} )( window.wp.blocks, window.wp.element );