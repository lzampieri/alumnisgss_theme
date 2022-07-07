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
            },
            subtext: {
                type: 'text',
                default: ''
            }
        },
        icon: "book",
        edit: function ( props ) {
            return (
                <div class="flex flex-col items-center w-full py-16">
                    <span class="text-2xl md:text-5xl font-bold two-fifths border-b-4 border-details-bg rounded text-body-tx text-center">
                        <wp.blockEditor.RichText
                            value={ props.attributes.text }
                            onChange = { ( text ) => { props.setAttributes( { text: text } ); } }
                            placeholder = "Titolo"
                            />
                    </span>
                    <span class="text-lg md:text-2xl font-bold two-fifths text-body-tx text-center opacity-50">
                        <wp.blockEditor.RichText
                            value={ props.attributes.subtext }
                            onChange = { ( subtext ) => { props.setAttributes( { subtext: subtext } ); } }
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
                        className="text-2xl md:text-5xl font-bold two-fifths border-b-4 border-details-bg rounded text-body-tx text-center"
                        value={ props.attributes.text }
                    />
                    <wp.blockEditor.RichText.Content
                        tagName="span"
                        className="text-lg md:text-2xl font-bold two-fifths text-body-tx text-center opacity-50"
                        value={ props.attributes.subtext }
                    />
                </div>
            )
        },
    } );
} )( window.wp.blocks, window.wp.element );