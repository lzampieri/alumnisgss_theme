( function ( blocks, element ) {
    var el = element.createElement;
 
    blocks.registerBlockType( 'alumnisgss-theme/block-internal-menu', {
        // apiVersion: 2,
        title: "Menù interno",
        name: "alumnisgss-theme/block-internal-menu",
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
                    <div className="flex flex-col items-center bg-header-bg text-header-tx py-8">
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
                <div className="flex flex-col items-center bg-header-bg text-header-tx py-8">
                    <wp.components.SelectControl
                        label="Menù interno:"
                        value={ props.attributes.menuId }
                        options = { options }
                        onChange={ ( newMenuId ) => props.setAttributes( { menuId: parseInt( newMenuId ) } ) }
                        />
                    <wp.serverSideRender
                        block="alumnisgss-theme/block-internal-menu"
                        attributes={ { menuId: props.attributes.menuId } } />
                </div>
            )
        },
        save ( props ) { return null }
    } );
} )( window.wp.blocks, window.wp.element );