import {be} from '../util';

export default function(session)
{
    const url = `/getProfileFromSession?session=${session}`;
    return be.get(url);
}