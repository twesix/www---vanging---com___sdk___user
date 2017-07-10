const path=require('path');
const vars = require('../vars');

module.exports =
    {
        path: vars.path.build.root,
        filename:'[name].entry.js',
        chunkFilename: '[name].chunk.js'
    };