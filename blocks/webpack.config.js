module.exports = {
    entry: {
        'only-content/block': ['./only-content/block.jsx'],
        'only-image/block': ['./only-image/block.jsx'],
        'content-and-image/block': ['./content-and-image/block.jsx'],
        'content-and-image-rev/block': ['./content-and-image-rev/block.jsx'],
        'menu-carousel/block': ['./menu-carousel/block.jsx'],
        'category-carousel/block': ['./category-carousel/block.jsx'],
        'small-title/block': ['./small-title/block.jsx'],
        'button/block': ['./button/block.jsx'],
        'cit/block': ['./cit/block.jsx']
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
  