const path=require('path');

module.exports =
    {
        Define:
            {
                development: require('./plugin-list/Define.development'),
                production: require('./plugin-list/Define.production'),
            },
        HtmlWebpack: require('./plugin-list/HtmlWebpack'),
        UglifyJs: require('./plugin-list/UglifyJs'),
    };
