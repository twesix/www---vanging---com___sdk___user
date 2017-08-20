import user from './modules/user';

const store = new Vuex.Store
(
    {
        modules:
            {
                user,
            }
    }
);

console.log(`[user] init`);
store.commit('user/sessionLogin');

window['www---vanging---com___sdk___user.store'] = store;

export default store;