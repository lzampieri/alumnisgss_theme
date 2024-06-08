(function (blocks, element) {

    blocks.registerBlockType('alumnisgss-theme/block-small-title', {
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
            },
            theme: {
                type: 'string',
                default: 'extra'
            },
        },
        icon: "book",
        edit: function (props) {
            const blockProps = wp.blockEditor.useBlockProps();

            const theme_labels = {
                'extra': 'Esterno',
                'dark': 'Scuro',
                'light': 'Chiaro',
            }
            const title_classes = {
                'extra': 'text-body-tit',
                'dark': 'text-dark-tit',
                'light': 'text-light-tit'
            }
            const subtitle_classes = {
                'extra': 'text-body-sub',
                'dark': 'text-dark-sub',
                'light': 'text-light-sub'
            }

            return (
                <div class="flex flex-col items-center w-full py-16">
                    <wp.components.DropdownMenu
                        icon="color-picker"
                        controls={Object.keys(theme_labels).map((k, i) => {
                            return {
                                title: theme_labels[k],
                                onClick: () => props.setAttributes({ theme: k })
                            }
                        })}
                    />
                    <span class={"text-2xl md:text-5xl font-bold two-fifths border-b-4 border-details-bg rounded text-center " + title_classes[props.attributes.theme]}>
                        <wp.blockEditor.RichText
                            value={props.attributes.text}
                            onChange={(text) => { props.setAttributes({ text: text }); }}
                            placeholder="Titolo"
                        />
                    </span>
                    <span class={"text-lg md:text-2xl font-bold two-fifths text-center " + subtitle_classes[props.attributes.theme]}>
                        <wp.blockEditor.RichText
                            value={props.attributes.subtext}
                            onChange={(subtext) => { props.setAttributes({ subtext: subtext }); }}
                            placeholder="Ev. sottotitolo"
                        />
                    </span>
                </div>
            )
        },
        save: function (props) {
            const blockProps = wp.blockEditor.useBlockProps.save();
            
            const title_classes = {
                'extra': 'text-body-tit',
                'dark': 'text-dark-tit',
                'light': 'text-light-tit'
            }
            const subtitle_classes = {
                'extra': 'text-body-sub',
                'dark': 'text-dark-sub',
                'light': 'text-light-sub'
            }

            return (
                <div class="flex flex-col items-center w-full py-16">
                    <wp.blockEditor.RichText.Content
                        tagName="span"
                        className={"text-2xl md:text-5xl font-bold two-fifths border-b-4 border-details-bg rounded text-center " + title_classes[ props.attributes.theme ]}
                        value={props.attributes.text}
                    />
                    <wp.blockEditor.RichText.Content
                        tagName="span"
                        className={"text-lg md:text-2xl font-bold two-fifths text-center " + subtitle_classes[ props.attributes.theme ]}
                        value={props.attributes.subtext}
                    />
                </div>
            )
        },
    });
})(window.wp.blocks, window.wp.element);