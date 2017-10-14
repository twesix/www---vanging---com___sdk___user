import {be} from '../../../util';

export default function(account, password)
{
    const url = `/sign/in/password/?account=${account}&password=${password}`;
    return be.get(url);
}