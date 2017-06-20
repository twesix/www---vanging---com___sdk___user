const path = require('path');

module.exports =
    {
        path:
            {
                build:
                    {
                        root: path.resolve(__dirname, '../../build'),
                        vendor:
                            {
                                root: path.resolve(__dirname, '../../build/vendor'),
                                manifest: path.resolve(__dirname, '../../build/vendor/manifest.json')
                            },
                    },
                src:
                    {
                        root: path.resolve(__dirname, '../../src'),
                        pages: path.resolve(__dirname, '../../src/pages'),
                        vendor: path.resolve(__dirname, '../../src/vendor')
                    }
            }
    };

console.log(module.exports);