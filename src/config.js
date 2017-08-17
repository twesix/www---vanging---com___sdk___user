const config =
    {

    };

if(DEVELOPMENT)
{
    config.baseUrl = 'https://be.www.vanging.com/user'
}
else
{
    config.baseUrl = 'http://localhost:8080/user'
}

export default config;