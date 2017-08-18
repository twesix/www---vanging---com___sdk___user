import register from '../../main/module/register';

describe(' [ register ] > default()', function()
{
    it('should make the request', function()
    {
        return register('test_email_' + Math.random(), 'test_password_' + Math.random());
    })
});