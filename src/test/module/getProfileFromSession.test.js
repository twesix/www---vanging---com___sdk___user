import getProfileFromSession from '../../main/module/getProfileFromSession';

describe(' [ getProfileFromSession ] > default()', function()
{
    it('should make the request', function()
    {
        return getProfileFromSession('session');
    })
});