import {be} from '../../../util';

export default function(email, password)
{
    const url = `/sign/up/email/?email=${email}&password=${password}`;
    return be.get(url);
}