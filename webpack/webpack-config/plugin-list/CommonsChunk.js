const webpack = require('webpack');

module.exports = new webpack.optimize.CommonsChunkPlugin
(
    {
        name: 'commons',
        filename: 'vendor/[name].chunk.js',
    }
);