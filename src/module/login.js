import {be} from '../util';

export default function register(account, password)
{
    const url = `/login?account=${account}&password=${password}`;
    return be.get(url);
}