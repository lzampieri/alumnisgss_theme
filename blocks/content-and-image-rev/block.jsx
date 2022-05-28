( function ( blocks, element ) {
    var el = element.createElement;
 
    blocks.registerBlockType( 'alumnisgss-theme/block-content-and-image-rev', {
        // apiVersion: 2,
        title: "Sezione: contenuto e immagine",
        name: "alumnisgss-theme/block-content-and-image-rev",
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
        icon: "align-pull-left",
        edit: function ( props ) {
            const blockProps = wp.blockEditor.useBlockProps();

            return ( 
                <div className="content-and-image-flex">
                    <div className="content-and-image-intraflex">
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
                        <span class="separator"></span>
                        <div className="two-side-content">
                            <wp.blockEditor.RichText
                                value={ props.attributes.content }
                                onChange = { ( content ) => { props.setAttributes( { content: content } ); } }
                                placeholder="Contenuto..."
                            />
                            <wp.blockEditor.InnerBlocks />
                        </div>
                    </div>
                </div>
            )
        },
        save: function ( props ) {
            const blockProps = wp.blockEditor.useBlockProps.save();

            return ( 
                <div className="content-and-image-flex">
                    <div className="content-and-image-intraflex">
                        <span
                            class="content-and-image-image"
                            style={{
                                backgroundImage: "url(" +   props.attributes.mediaSrc + ")"
                                }}>
                        </span>
                        <span class="separator"></span>
                        <span className="two-side-content">
                            <wp.blockEditor.RichText.Content
                                tagName="div"
                                value={ props.attributes.content }
                                />
                            <wp.blockEditor.InnerBlocks.Content />
                        </span>
                    </div>
                </div>
            )
        },
    } );
} )( window.wp.blocks, window.wp.element );