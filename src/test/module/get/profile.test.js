import profile from '../../../main/module/get/profile';

describe(' [ get/profile ] > default()', function()
{
    it('should make the request', function()
    {
        return profile('session');
    })
});