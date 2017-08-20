const path=require('path');

module.exports =
    {
        Define: require('./plugin-list/Define'),
        HotModuleReplacement: require('./plugin-list/HotModuleReplacement'),
        HtmlWebpack: require('./plugin-list/HtmlWebpack'),
        NamedModules: require('./plugin-list/NamedModules'),
        UglifyJs: require('./plugin-list/UglifyJs'),
    };
