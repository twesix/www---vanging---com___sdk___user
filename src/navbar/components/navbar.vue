<template>
    <div>
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#domain_bar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a href="//www.vanging.com" class="navbar-brand" target="_blank">
                        <span id="brand">VanGing</span><br>
                    </a>
                </div>

                <div class="collapse navbar-collapse" id="domain_bar">
                    <ul class="nav navbar-nav navbar-right" id="login_status">

                        <li v-if="!online"><a data-toggle="modal" href="#modal_register">注册</a></li>
                        <li v-if="!online"><a data-toggle="modal" href="#modal_login">登录</a></li>

                        <li v-if="online">
                            <a href="//www.vanging.com/user" target="_blank">
                                <span id="username">{{username}}</span>
                            </a>
                        </li>
                        <li v-if="online"><a href="#logout" @click.prevent="logout()" id="logout">注销</a></li>

                    </ul>
                </div>
            </div>
        </nav>
        <modal_login></modal_login>
        <modal_register></modal_register>
    </div>
</template>

<script>
    import modal_login from './modals/login.vue';
    modal_login._Ctor = undefined;
    import modal_register from './modals/register.vue';
    modal_register._Ctor = undefined;

    export default
    {
        data: function()
        {
            return {};
        },
        computed:
            {
                online: function()
                {
                    return this.$store.state.user.online;
                },
                username: function()
                {
                    return this.$store.state.user.profile.username;
                }
            },
        methods:
            {
                logout: function()
                {
                    this.$store.commit('user/logout');
                }
            },
        components:
            {
                modal_login,
                modal_register,
            }
    }
</script>
<style scoped>
    #brand,
    #logout
    {
        color: red;
    }
    .navbar
    {
        border-radius: 0;
    }
</style>
<style>
    @import "//at.alicdn.com/t/font_1469889758_9089751.css";

    html,
    body
    {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }
</style>