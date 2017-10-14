import {be} from '../../util';

export default function(session)
{
    const url = `/get/profile/?session=${session}`;
    return be.get(url);
}