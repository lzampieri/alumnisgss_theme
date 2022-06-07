( function ( blocks, element ) {
    var el = element.createElement;
 
    blocks.registerBlockType( 'alumnisgss-theme/block-menu-carousel', {
        // apiVersion: 2,
        title: "Carosello",
        name: "alumnisgss-theme/block-menu-carousel",
        category: "theme",
        attributes: {
            menuId: {
                type: 'number',
                default: 0
            }
        },
        icon: "menu",
        edit: function ( props ) {
            const { menus } = wp.data.useSelect( ( select ) => {
                return { menus: select('core').getMenus() }
             } )
            
            if( menus == null ) {
                return (
                    <div className="two-cols-flex">
                        Loading...
                    </div>
                )
            }

            var options = menus.map( (m) => {
                return { label: m['name'], value: m['id'] }
            });
            options.unshift(
                { label: "Nessuno", value: 0 }
            )

            return (
                <div className="two-cols-flex">
                    <wp.components.SelectControl
                        label="Menu:"
                        value={ props.attributes.menuId }
                        options = { options }
                        onChange={ ( newMenuId ) => props.setAttributes( { menuId: parseInt( newMenuId ) } ) }
                        />
                    <wp.serverSideRender
                        block="alumnisgss-theme/block-menu-carousel"
                        attributes={ { menuId: props.attributes.menuId } } />
                </div>
            )
        },
        save ( props ) { return null }
    } );
} )( window.wp.blocks, window.wp.element );