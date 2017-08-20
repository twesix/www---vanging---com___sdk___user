const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const vars = require('../../vars');

const plugin = new HtmlWebpackPlugin
(
    {
        filename: `index.html`,
        template: path.resolve(vars.path.src.root, `index.html`),
        chunks: [],
        hash: true,
        cache: true,
    }
);

module.exports = plugin;