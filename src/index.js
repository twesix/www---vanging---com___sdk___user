let routes =
    [
        {
            path:'/child',
            component: require('./components/child.vue')
        }
    ];

let router = new VueRouter(routes);

let app = new Vue
(
    {
        el:'#app',
        router:router,
        template:'<wrapper></wrapper>',
        components:
            {
                wrapper:require('./components/app.vue')
            }
    }
);