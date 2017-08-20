const store = window['www---vanging---com___sdk___user.store'];

import navbar from './components/navbar.vue';
navbar._Ctor = undefined;

const div = document.createElement('div');
div.id = 'navbar_container';
document.body.insertBefore(div, document.body.firstChild);

new Vue
(
    {
        name: 'navbar',
        el: '#navbar_container',
        template: `<navbar></navbar>`,
        store: store,
        components:
            {
                navbar,
            }
    }
);