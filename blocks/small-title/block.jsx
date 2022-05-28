( function ( blocks, element ) {
 
    blocks.registerBlockType( 'alumnisgss-theme/block-small-title', {
        // apiVersion: 2,
        title: "Titoletto",
        name: "alumnisgss-theme/block-small-title",
        category: "theme",
        attributes: {
            text: {
                type: 'text',
                default: ''
            }
        },
        icon: "title",
        edit: function ( props ) {
            return (
                <div class="flex flex-row items-center justify-center w-full bg-dark-bg py-8">
                    <h2 class="text-2xl md:text-5xl font-bold w-5/6 md:w-2/5 border-b-4 border-details-bg rounded text-dark-tx py-4 text-center">
                        <wp.blockEditor.RichText
                            value={ props.attributes.text }
                            onChange = { ( text ) => { props.setAttributes( { text: text } ); } }
                            placeholder = "Titolo"
                            />
                    </h2>
                </div>
            )
        },
        save: function ( props ) {
            return (
                <div class="flex flex-row items-center justify-center w-full py-8">
                    <wp.blockEditor.RichText.Content
                        tagName="h2"
                        className="text-2xl md:text-5xl font-bold w-5/6 md:w-2/5 border-b-4 border-details-bg rounded text-dark-tx py-4 text-center"
                        value={ props.attributes.text }
                    />
                </div>
            )
        },
    } );
} )( window.wp.blocks, window.wp.element );