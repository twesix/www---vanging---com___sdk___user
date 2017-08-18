import {be} from '../../util';

export default function(email)
{
    const url = `/exist/email?email=${email}`;
    return be.get(url);
}