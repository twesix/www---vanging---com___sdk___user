import email from '../../../../main/module/sign/up/email';

describe(' [ sign/up/email ] > default()', function()
{
    it('should make the request', function()
    {
        return email('test_email_' + Math.random(), 'test_password_' + Math.random());
    })
});