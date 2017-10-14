import tel from '../../../main/module/exist/tel';

describe(' [ exist/tel ] > default()', function()
{
    it('should make the request', function()
    {
        return tel('test_' + Math.random());
    })
});