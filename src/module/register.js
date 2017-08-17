import {be} from '../util';

export default function register(email, password)
{
    const url = `/register?email=${email}&password=${password}`;
    return be.get(url);
}