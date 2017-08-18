import {be} from '../util';

export default function(email, password)
{
    const url = `/register?email=${email}&password=${password}`;
    return be.get(url);
}