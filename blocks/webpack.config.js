module.exports = {
    entry: {
        'only-content/block': ['./only-content/block.jsx'],
        'only-image/block': ['./only-image/block.jsx'],
        'content-and-image/block': ['./content-and-image/block.jsx'],
        'content-and-content/block': ['./content-and-content/block.jsx'],
        'content-and-content-thecontent/block': ['./content-and-content-thecontent/block.jsx'],
        'content-and-content-theseparator/block': ['./content-and-content-theseparator/block.jsx'],
        'menu-carousel/block': ['./menu-carousel/block.jsx'],
        'category-carousel/block': ['./category-carousel/block.jsx'],
        'small-title/block': ['./small-title/block.jsx'],
        'subtitle/block': ['./subtitle/block.jsx'],
        'button/block': ['./button/block.jsx'],
        'cit/block': ['./cit/block.jsx'],
        'internal-menu/block': ['./internal-menu/block.jsx'],
        'fb-feed/block': ['./fb-feed/block.jsx']
    },
    output: {
        path: __dirname,
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
};
  