import email from './module/exist/email';
import username from './module/exist/username';

const exist =
    {
        email,
        username
    };

import getProfileFromSession from './module/getProfileFromSession';
import login from './module/login';
import register from './module/register';

const user =
    {
        exist,
        getProfileFromSession,
        register,
        login
    };

export default user;

window['www---vanging---com___sdk___user'] = user;