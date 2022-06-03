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
            },
            direction: {
                type: 'integer',
                default: 'right'
            }
        },
        icon: "cover-image",
        edit: function ( props ) {
            
            const theme_labels = {
                'dark': 'Scuro',
                'light': 'Chiaro'
            }
            const section_classes = {
                'dark': 'section-dark',
                'light': 'section-light'
            }

            return ( 
                <div className={'only-content-flex ' + section_classes[ props.attributes.theme ] }>
                    <span className="separator"></span>
                        <div className="only-content-content">
                            <wp.components.DropdownMenu
                                icon="color-picker"
                                controls={ Object.keys( theme_labels ).map( ( k,i ) => { return {
                                    title: theme_labels[ k ],
                                    onClick: () => props.setAttributes( { theme: k } )
                                } } ) }
                            />
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
            const section_classes = {
                'dark': 'section-dark',
                'light': 'section-light'
            }

            return ( 
                <div className={'only-content-flex ' + section_classes[ props.attributes.theme ] }>
                    <span className="separator"></span>
                    <div className="only-content-content">
                        <img className="max-w-full max-h-[250px]"
                            src={ props.attributes.mediaSrc } />
                    </div>
                    <span className="separator"></span>
                </div>
            )
        },
    } );
} )( window.wp.blocks, window.wp.element );