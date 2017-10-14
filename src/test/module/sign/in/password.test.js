import password from '../../../../main/module/sign/in/password';

describe(' [ sign/in/password ] > default()', function()
{
    it('should make the request', function()
    {
        return password('email', 'password');
    })
});