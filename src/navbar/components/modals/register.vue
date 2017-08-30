<template>
    <div class="modal fade" id="modal_register">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="text-center">注册</h2>
                </div>
                <div class="modal-body">
                    <form id="register_form">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="icon-people iconfont"></i></span>
                            <input type="text" id="register_account" class="form-control input-lg" placeholder="邮箱">
                        </div>
                        <div id="register_account_message" class="input-message">&nbsp;</div>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="icon-lock iconfont"></i></span>
                            <input id="register_password" type="password" class="form-control input-lg" placeholder="密码">
                        </div>
                        <div id="register_password_message" class="input-message">&nbsp;</div>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="icon-lock iconfont"></i></span>
                            <input id="register_confirm_password" type="password" class="form-control input-lg" placeholder="确认密码">
                        </div>
                        <div id="register_confirm_password_message" class="input-message">&nbsp;</div>
                        <button class="btn btn-primary btn-lg btn-block" type="button" id="register_button">注册</button>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger btn-lg btn-block" data-dismiss="modal">关闭</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
</template>

<script>

    const userSDK = window['www---vanging---com___sdk___user'];

    export default
    {
        data: function()
        {
            return {
                account: 'email',
                password: 'password',
            };
        },
        computed:
            {

            },
        methods:
            {
                login: function()
                {
                    const login_form = document.getElementById('login_form');

                    userSDK.login(this.account, this.password)
                        .then(function(result)
                        {
                            result = JSON.parse(result);
                            if(result.status === 'ok')
                            {
                                console.log(result);
                                login_form.reset();
                            }
                        }, function(err)
                        {
                            console.log(err);
                        })
                }
            }
    }
</script>
<style scoped>
</style>