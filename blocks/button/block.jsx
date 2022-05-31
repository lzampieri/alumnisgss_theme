( function ( blocks, element ) {
 
    blocks.registerBlockType( 'alumnisgss-theme/block-button', {
        // apiVersion: 2,
        title: "Bottone",
        name: "alumnisgss-theme/block-button",
        category: "theme",
        attributes: {
            text: {
                type: 'string',
                default: ''
            },
            url: {
                type: 'string',
                default: ''
            },
            align: {
                type: 'string',
                default: 'c'
            },

        },
        icon: "button",
        edit: function ( props ) {
            const align_classes = {
                'l': 'w-full flex flex-row justify-start items-center py-4',
                'c': 'w-full flex flex-row justify-center items-center py-4',
                'r': 'w-full flex flex-row justify-end items-center py-4'
            }
            const align_icons = {
                'l': 'editor-alignleft',
                'c': 'editor-aligncenter',
                'r': 'editor-alignright'
            }

            return (
                <div className={ align_classes[ props.attributes.align ] }>
                    <wp.blockEditor.URLInputButton
                        url={ props.attributes.url }
                        onChange={ (newUrl) => props.setAttributes( { url: newUrl } ) }
                        />
                    <wp.components.DropdownMenu
                        icon={ align_icons[ props.attributes.align ] }
                        controls={ Object.keys( align_icons ).map( ( k,i ) => { return {
                                icon: align_icons[ k ],
                                onClick: () => props.setAttributes( { align: k } )
                            } } ) }
                        />
                    <wp.components.TextControl
                        className="abutton"
                        value={ props.attributes.text }
                        onChange={ ( newText ) => props.setAttributes( { text: newText } ) }
                        placeholder="Testo..."
                    />
                </div>
            )
        },
        save: function ( props ) {
            const align_classes = {
                'l': 'w-full flex flex-row justify-start py-4',
                'c': 'w-full flex flex-row justify-center py-4',
                'r': 'w-full flex flex-row justify-end py-4'
            }

            return (
                <div className={ align_classes[ props.attributes.align ] }>
                    <a
                        href={ props.attributes.url }
                        class="abutton">
                        { props.attributes.text }
                    </a>
                </div>
            )
        },
    } );
} )( window.wp.blocks, window.wp.element );