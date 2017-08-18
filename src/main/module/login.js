import {be} from '../util';

export default function(account, password)
{
    const url = `/login?account=${account}&password=${password}`;
    return be.get(url);
}