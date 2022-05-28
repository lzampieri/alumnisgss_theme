( function ( blocks, element ) {
    var el = element.createElement;
 
    blocks.registerBlockType( 'alumnisgss-theme/block-only-image', {
        // apiVersion: 2,
        title: "Sezione: solo immagine",
        name: "alumnisgss-theme/block-only-image",
        category: "theme",
        attributes: {
            mediaId: {
                type: 'number',
                default: 0
            },
            mediaSrc: {
                type: 'string',
                default: ''
            }
        },
        icon: "cover-image",
        edit: function ( props ) {
            return ( 
                <div className="only-content-flex">
                    <span className="separator"></span>
                        <div className="only-content-content">
                            <img src={ props.attributes.mediaSrc } />
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
                        </div>
                    <span className="separator"></span>
                </div>
            )
        },
        save: function ( props ) {
            return ( 
                <div className="only-content-flex">
                    <span className="separator"></span>
                        <img className="only-content-content"
                            src={ props.attributes.mediaSrc } />
                    <span className="separator"></span>
                </div>
            )
        },
    } );
} )( window.wp.blocks, window.wp.element );