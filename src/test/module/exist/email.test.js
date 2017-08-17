import email from '../../../module/exist/email';

describe(' [ exist/email ] > default()', function()
{
    it('should make the request', function()
    {
        return email('test_email_' + Math.random());
    })
});