module.exports = {
    mode: 'jit',
    content: [
        './404.php',
        './category.php',
        './home.php',
        './index.php',
        './page.php',
        './single.php',
        './templates/*',
        './parts/*',
        './func/*',
        './src/*',
        './blocks/**/block.jsx',
        './blocks/**/renderer.php',
        './app.css' // To force compilation of all explicitly defined stuff
    ],
    theme: require( './theme'),
    plugins: [
        // require('@tailwindcss/forms'),
      ],
};
