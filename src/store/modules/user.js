const userSDK = window['www---vanging---com___sdk___user'];
const sessionName = 'user:session';

const user =
    {
        namespaced: true,
        state:
            {
                online: false,
                profile: {},
            },
        mutations:
            {
                tpl: function(state, payload)
                {

                },
                login: function(state, payload)
                {
                    state.online = true;
                    state.profile = payload;
                },
                logout: function(state, payload)
                {
                    state.profile = {};
                    state.online = false;
                    window.localStorage.removeItem(sessionName);
                },
                sessionLogin: function(state, payload)
                {
                    if(payload)
                    {
                        window.localStorage.setItem(sessionName, payload);
                    }
                    const session = window.localStorage.getItem(sessionName);
                    if(session)
                    {
                        console.log(`[user] session login: yes`);

                        userSDK.getProfileFromSession(session)
                            .then(function(result)
                            {
                                result = JSON.parse(result);
                                if(result.status === 'ok')
                                {
                                    console.log(`[user] session login: ok`);
                                    state.profile = result.message;
                                    state.online = true;
                                }
                                else
                                {
                                    console.log(`[user] session login: fail`);
                                    console.log(result);
                                }
                            },function(err)
                            {
                                console.log(err);
                            });
                    }
                    else
                    {
                        console.log(`[user] session login: no`);
                    }
                }
            },
    };

export default user;