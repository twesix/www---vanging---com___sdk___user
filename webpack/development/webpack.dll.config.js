const vars = require('../vars');
const plugins = require('../webpack-config/plugins');

module.exports =
    {
        entry: vars.project.dlls.development,
        output:
            {
                path: vars.path.build.vendor.root,
                filename:'dll.js',
                library: '[name]_[chunkhash]'
            },
        module: require('../webpack-config/module'),
        resolve: require('../webpack-config/resolve'),
        plugins:
            [
                plugins.Provide,
                plugins.Dll,
            ]
    };