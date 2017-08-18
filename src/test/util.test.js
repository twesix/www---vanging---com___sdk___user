import {get, be} from '../main/util';

export default function test()
{

}

describe('[ util ] > get()', function()
{
    it('return result with the right url', function()
    {
        return get('https://api.github.com');
    });
    it('return error with the wrong url', function(done)
    {
        get('https://be.www.vanging.com')
            .then(function()
            {

            },function(err)
            {
                console.log(err);
                done();
            });
    });
});

describe('[ util.be ] > get()', function()
{
    it('do request depending on the environment', function()
    {
        return be.get('/exist');
    });
});