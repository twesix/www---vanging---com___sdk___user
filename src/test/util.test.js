import {get} from '../util';

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
    })
});