( function ( blocks, element ) {
 
    blocks.registerBlockType( 'alumnisgss-theme/block-cit', {
        // apiVersion: 2,
        title: "Citazione (alumni)",
        name: "alumnisgss-theme/block-cit",
        category: "theme",
        attributes: {
            content: {
                type: 'string',
                default: ''
            },
            align: {
                type: 'string',
                default: 'c'
            },
            color: {
                type: 'string',
                default: 'dark'
            }
        },
        icon: "format-quote",
        edit: function ( props ) {

            // Alignment
            const align_classes = {
                'r': 'w-full flex flex-col items-start py-4',
                'c': 'w-full flex flex-col items-center py-4',
                'l': 'w-full flex flex-col items-end py-4'
            }
            const text_classes = {
                'r': 'text-left',
                'c': 'text-center',
                'l': 'text-right'
            }
            const align_icons = {
                'r': 'editor-alignleft',
                'c': 'editor-aligncenter',
                'l': 'editor-alignright'
            }

            // Theme
            const icon_url = {
                'dark': '/assets/quote_on_light.svg',
                'light': '/assets/quote_on_dark.svg'
            }
            const theme_labels = {
                'dark': 'Scuro',
                'light': 'Chiaro'
            }
            const text_color_classes = {
                'dark': 'opacity-75 text-light-tx',
                'light': 'opacity-75 text-dark-tx'
            }

            return (
                <div className={ align_classes[ props.attributes.align ] }>
                    <div className="w-full flex flex-row justify-center">
                        <wp.components.DropdownMenu
                            icon={ align_icons[ props.attributes.align ] }
                            controls={ Object.keys( align_icons ).map( ( k,i ) => { return {
                                    icon: align_icons[ k ],
                                    onClick: () => props.setAttributes( { align: k } )
                                } } ) }
                            />
                        <wp.components.DropdownMenu
                            icon="color-picker"
                            controls={ Object.keys( theme_labels ).map( ( k,i ) => { return {
                                    title: theme_labels[ k ],
                                    onClick: () => props.setAttributes( { color: k } )
                                } } ) }
                            />
                    </div>
                    <img
                        className="max-h-8 pb-2 opacity-75"
                        src={ alumnisgssThemeBlockCitVars.templateDirectoryUri + icon_url[ props.attributes.color ] }
                        />
                    <wp.blockEditor.RichText
                        className={ "italic text-lg md:text-xl " + text_classes[ props.attributes.align ] + " " + text_color_classes[ props.attributes.color ] }
                        value={ props.attributes.content }
                        onChange = { ( content ) => { props.setAttributes( { content: content } ); } }
                        placeholder="Contenuto..."
                    />
                </div>
            )
        },
        save: function ( props ) {

            // Alignment
            const align_classes = {
                'r': 'w-full flex flex-col items-start py-4',
                'c': 'w-full flex flex-col items-center py-4',
                'l': 'w-full flex flex-col items-end py-4'
            }
            const text_classes = {
                'r': 'text-left',
                'c': 'text-center',
                'l': 'text-right'
            }
            const align_icons = {
                'r': 'editor-alignleft',
                'c': 'editor-aligncenter',
                'l': 'editor-alignright'
            }

            // Theme
            const icon_url = {
                'dark': '/assets/quote_on_light.svg',
                'light': '/assets/quote_on_dark.svg'
            }
            const theme_labels = {
                'dark': 'Scuro',
                'light': 'Chiaro'
            }
            const text_color_classes = {
                'dark': 'opacity-75 text-light-tx',
                'light': 'opacity-75 text-dark-tx'
            }

            return (
                <div className={ align_classes[ props.attributes.align ] }>
                    <img
                        className="max-h-8 pb-2 opacity-75"
                        src={ alumnisgssThemeBlockCitVars.templateDirectoryUri + icon_url[ props.attributes.color ] }
                        />
                    <wp.blockEditor.RichText.Content
                        tagName="span"
                        className={ "italic text-lg md:text-xl " + text_classes[ props.attributes.align ] + " " + text_color_classes[ props.attributes.color ] }
                        value={ props.attributes.content } />
                </div>
            )
        },
    } );
} )( window.wp.blocks, window.wp.element );