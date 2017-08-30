<template>
    <div class="modal fade" id="modal_login">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="text-center">登录</h2>
                </div>
                <div class="modal-body">
                    <form id="login_form" @submit.prevent="login">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="icon-people iconfont"></i></span>
                            <input v-model="account" @blur="check_account" type="text" id="login_account"
                                   class="form-control input-lg" placeholder="账号/手机号/邮箱" required>
                        </div>
                        <div id="login_account_message" class="input-message">
                            &nbsp;&nbsp;
                            <span class="text-success">{{ message_account_normal }}</span>
                            <span class="text-danger">{{ message_account_error }}</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="icon-lock iconfont"></i></span>
                            <input v-model="password" id="login_password" type="password"
                                   class="form-control input-lg" placeholder="密码" required>
                        </div>
                        <div id="login_password_message" class="input-message">
                            &nbsp;&nbsp;
                            <span class="text-success">{{ message_password_normal }}</span>
                            <span class="text-danger">{{ message_password_error }}</span>
                        </div>
                        <br>
                        <button class="btn btn-primary btn-lg btn-block" type="submit"
                                id="login_button">登陆</button>
                    </form>
                </div>
                <div class="modal-footer">
                    <br>
                    <br>
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
                message_account_normal: '',
                message_account_error: '',
                message_password_normal: '',
                message_password_error: '',
            };
        },
        computed:
            {

            },
        methods:
            {
                login: function()
                {
                    const self = this;
                    const login_form = document.getElementById('login_form');

                    userSDK.login(this.account, this.password)
                        .then(function(result)
                        {
                            result = JSON.parse(result);
                            if(result.status === 'ok')
                            {
                                login_form.reset();
                                self.set_message_account_error('');
                                self.set_message_account_normal('');
                                self.set_message_password_error('');
                                self.set_message_password_normal('');

                                self.$store.commit('user/sessionLogin', result.message);
                                $("#modal_login").modal('hide');
                            }
                            else
                            {
                                if(result.status === 'password_not_match')
                                {
                                    self.set_message_password_normal('');
                                    self.set_message_password_error('密码错误');
                                }
                            }
                        }, function(err)
                        {
                            console.log(err);
                        })
                },
                check_account: function()
                {
                    const self = this;
                    userSDK.exist.email(this.account)
                        .then(function(result)
                        {
                            result = JSON.parse(result);
                            if(result.status === 'ok' && result.message)
                            {
                                self.set_message_account_error('');
                                self.set_message_account_normal('OK');
                            }
                            else
                            {
                                self.set_message_account_normal('');
                                self.set_message_account_error('该账户不存在');
                            }
                        });
                    return;
                    // TODO : check username from backend
                    userSDK.exist.username(this.account)
                        .then(function(result)
                        {
                            result = JSON.parse(result);
                            if(result.status === 'ok' && result.message)
                            {
                                self.set_message_account_error('');
                                self.set_message_account_normal('OK');
                            }
                            else
                            {
                                self.set_message_account_normal('');
                                self.set_message_account_error('该账户不存在');
                            }
                        });
                },
                account_not_exist: function()
                {

                },
                set_message_account_normal: function(message)
                {
                    this.message_account_normal = message;
                },
                set_message_account_error: function(message)
                {
                    this.message_account_error = message;
                },
                set_message_password_normal: function(message)
                {
                    this.message_password_normal = message;
                },
                set_message_password_error: function(message)
                {
                    this.message_password_error = message;
                },
            }
    }
</script>
<style scoped>
</style>