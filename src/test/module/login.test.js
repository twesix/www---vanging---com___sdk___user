import login from '../../module/login';

describe(' [ login ] > default()', function()
{
    it('should make the request', function()
    {
        return login('email', 'password');
    })
});