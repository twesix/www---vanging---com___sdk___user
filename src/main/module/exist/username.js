import {be} from '../../util';

export default function(username)
{
    const url = `/exist/username/?username=${username}`;
    return be.get(url);
}