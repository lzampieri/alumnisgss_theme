( function ( blocks, element ) {
 
    blocks.registerBlockType( 'alumnisgss-theme/block-subtitle', {
        // apiVersion: 2,
        title: "Sottotitolo",
        name: "alumnisgss-theme/block-subtitle",
        category: "theme",
        attributes: {
            text: {
                type: 'text',
                default: ''
            }
        },
        icon: "book",
        edit: function ( props ) {
            return (
                <div class="flex flex-col items-center w-full py-16">
                    <span class="text-xl md:text-3xl font-bold w-5/6 md:w-2/5 text-body-tx text-center opacity-50">
                        <wp.blockEditor.RichText
                            value={ props.attributes.text }
                            onChange = { ( text ) => { props.setAttributes( { text: text } ); } }
                            placeholder = "Ev. sottotitolo"
                            />
                    </span>
                </div>
            )
        },
        save: function ( props ) {
            return (
                <div class="flex flex-col items-center w-full py-16">
                    <wp.blockEditor.RichText.Content
                        tagName="span"
                        className="text-xl md:text-3xl font-bold w-5/6 md:w-2/5 text-body-tx text-center opacity-50"
                        value={ props.attributes.text }
                    />
                </div>
            )
        },
    } );
} )( window.wp.blocks, window.wp.element );