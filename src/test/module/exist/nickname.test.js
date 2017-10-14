import nickname from '../../../main/module/exist/nickname';

describe(' [ exist/nickname ] > default()', function()
{
    it('should make the request', function()
    {
        return nickname('test_' + Math.random());
    })
});