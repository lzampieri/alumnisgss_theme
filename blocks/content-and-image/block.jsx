( function ( blocks, element ) {
    var el = element.createElement;
 
    blocks.registerBlockType( 'alumnisgss-theme/block-content-and-image', {
        // apiVersion: 2,
        title: "Sezione: contenuto e immagine",
        name: "alumnisgss-theme/block-content-and-image",
        category: "theme",
        attributes: {
            content: {
                type: 'string',
                default: ''
            },
            mediaId: {
                type: 'number',
                default: 0
            },
            mediaSrc: {
                type: 'string',
                default: ''
            }
        },
        icon: "align-pull-right",
        edit: function ( props ) {
            const blockProps = wp.blockEditor.useBlockProps();

            return ( 
                <div className="content-and-image-flex">
                    <div className="content-and-image-intraflex">
                        <div className="two-side-content">
                            <wp.blockEditor.RichText
                                value={ props.attributes.content }
                                onChange = { ( content ) => { props.setAttributes( { content: content } ); } }
                                placeholder="Contenuto..."
                            />
                            <wp.blockEditor.InnerBlocks />
                        </div>
                        <span class="separator"></span>
                        <span
                            class="content-and-image-image"
                            style={{
                                backgroundImage: "url(" +   props.attributes.mediaSrc + ")"
                                }}>
                            <wp.blockEditor.MediaUpload
                                allowedTypes={ ['image'] }
                                value={ props.attributes.mediaId }
                                render={ ({open}) => (
                                    <a
                                        className="button"
                                        onClick={open}
                                        >
                                        { props.attributes.mediaId == 0 ? "Scegli" : "Cambia" } immagine
                                    </a>
                                )}
                                onSelect={ (media) => {
                                    props.setAttributes( {
                                        mediaId: media.id,
                                        mediaSrc: media.url
                                    } );
                                }}
                            />
                        </span>
                    </div>
                </div>
            )
        },
        save: function ( props ) {
            const blockProps = wp.blockEditor.useBlockProps.save();

            return ( 
                <div className="content-and-image-flex">
                    <div className="content-and-image-intraflex">
                        <span className="two-side-content">
                            <wp.blockEditor.RichText.Content
                                tagName="div"
                                value={ props.attributes.content }
                                />
                            <wp.blockEditor.InnerBlocks.Content />
                        </span>
                        <span class="separator"></span>
                        <span
                            class="content-and-image-image"
                            style={{
                                backgroundImage: "url(" +   props.attributes.mediaSrc + ")"
                                }}>
                        </span>
                    </div>
                </div>
            )
        },
    } );
} )( window.wp.blocks, window.wp.element );