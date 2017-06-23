const path=require('path');
const vars = require('../vars');
const node_modules = path.resolve(vars.path.project.root, 'node_modules');

const alias =
    {
        vue: 'vue/dist/vue.js',
        'vue.min': 'vue/dist/vue.min.js',

        vuex: 'vuex/dist/vuex.js',
        'vuex.min': 'vuex/dist/vuex.min.js',

        'vue-router': 'vue-router/dist/vue-router.js',
        'vue-router.min': 'vue-router/dist/vue-router.min.js',

        jquery: 'jquery/dist/jquery.js',
        'jquery.min': 'jquery/dist/jquery.min.js',

        'bootstrap.js': 'bootstrap/dist/js/bootstrap.js',
        'bootstrap.min.js': 'bootstrap/dist/js/bootstrap.min.js',

        'bootstrap.css': 'bootstrap/dist/css/bootstrap.css',
        'bootstrap.min.css': 'bootstrap/dist/css/bootstrap.min.css',

    };

for(let key in alias)
{
    alias[key] = path.resolve(node_modules, alias[key]);
}

const resolve =
    {
        alias: alias
    };

module.exports = resolve;