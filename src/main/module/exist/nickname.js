import {be} from '../../util';

export default function(nickname)
{
    const url = `/exist/nickname/?nickname=${nickname}`;
    return be.get(url);
}