const config =
    {

    };

if(DEVELOPMENT)
{
    config.baseUrl = 'http://localhost:8080/user'
}
else
{
    config.baseUrl = 'https://be.www.vanging.com/user'
}

export default config;