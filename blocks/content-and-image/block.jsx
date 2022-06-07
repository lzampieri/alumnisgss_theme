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
            },
            theme: {
                type: 'string',
                default: 'dark'
            },
            direction: {
                type: 'integer',
                default: 'right'
            }
        },
        icon: "align-pull-right",
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
            const dir_icons = {
                'right': 'align-pull-right',
                'left': 'align-pull-left'
            }
            const section_dir_classes = {
                'right': 'two-cols-intraflex',
                'left': 'two-cols-intraflex-reverse'
            }


            return ( 
                <div className={'two-cols-flex ' + section_classes[ props.attributes.theme ] }>
                    <div className={section_dir_classes[ props.attributes.direction ]}>
                        <div className="two-side-content">
                            <wp.components.DropdownMenu
                            icon={ dir_icons[ props.attributes.direction ] }
                            controls={ Object.keys( dir_icons ).map( ( k,i ) => { return {
                                    icon: dir_icons[ k ],
                                    onClick: () => props.setAttributes( { direction: k } )
                                } } ) }
                            />
                            <wp.components.DropdownMenu
                                icon="color-picker"
                                controls={ Object.keys( theme_labels ).map( ( k,i ) => { return {
                                    title: theme_labels[ k ],
                                    onClick: () => props.setAttributes( { theme: k } )
                                } } ) }
                            />
                            <wp.blockEditor.RichText
                                value={ props.attributes.content }
                                onChange = { ( content ) => { props.setAttributes( { content: content } ); } }
                                placeholder="Contenuto..."
                            />
                            <wp.blockEditor.InnerBlocks />
                        </div>
                        <span class="separator"></span>
                        <span
                            class="two-cols-image"
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
            const section_classes = {
                'dark': 'section-dark',
                'light': 'section-light'
            }
            const section_dir_classes = {
                'right': 'two-cols-intraflex',
                'left': 'two-cols-intraflex-reverse'
            }

            return ( 
                <div className={'two-cols-flex ' + section_classes[ props.attributes.theme ] }>
                    <div className={section_dir_classes[ props.attributes.direction ]}>
                        <span className="two-side-content">
                            <wp.blockEditor.RichText.Content
                                tagName="div"
                                value={ props.attributes.content }
                                />
                            <wp.blockEditor.InnerBlocks.Content />
                        </span>
                        <span class="separator"></span>
                        <span
                            class="two-cols-image"
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