import {be} from '../../util';

export default function(tel)
{
    const url = `/exist/tel/?tel=${tel}`;
    return be.get(url);
}