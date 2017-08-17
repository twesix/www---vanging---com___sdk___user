import config from './config';

export function get(url)
{
    return new Promise(function(resolve,reject)
    {
        const xhr = new XMLHttpRequest();
        xhr.open('get', url);
        xhr.onerror = function()
        {
            reject(xhr.response);
        };
        xhr.onload = function()
        {
            if(xhr.status === 200)
            {
                resolve(xhr.response);
            }
            else
            {
                reject(xhr.response);
            }
        };
        xhr.send();
    });
}

const be = {};

be.get = function(url)
{
    return get(config.baseUrl + url);
};

export {be};