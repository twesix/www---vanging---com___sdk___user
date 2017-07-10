module.exports =
    [
        {
            test:/\.js$/,
            loader:'babel-loader',
            exclude:'/node_modules/',
            query:
                {
                    presets: ['latest', 'stage-0']
                }
        }
    ];