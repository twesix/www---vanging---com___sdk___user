const plugins = require('../webpack-config/plugins');

module.exports=
    {
        entry: require('../webpack-config/entry'),
        output: require('../webpack-config/output'),
        module: require('../webpack-config/module'),
        plugins:
            [
                plugins.Define.production,
                plugins.UglifyJs
            ]
    };

console.log(module.exports);