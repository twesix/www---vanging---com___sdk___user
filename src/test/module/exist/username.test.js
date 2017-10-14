import username from '../../../main/module/exist/username';

describe(' [ exist/username ] > default()', function()
{
    it('should make the request', function()
    {
        return username('test_' + Math.random());
    })
});