<template>
    <div class="modal fade" id="modal_register">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="text-center">注册</h2>
                </div>
                <div class="modal-body">
                    <form id="register_form" @submit.prevent="register">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="icon-people iconfont"></i></span>
                            <input @blur="check_email" type="email" id="register_account"
                                   v-model="email" class="form-control input-lg" placeholder="邮箱" required>
                        </div>
                        <div id="register_account_message" class="input-message">
                            &nbsp;&nbsp;
                            <span class="text-success">{{ message_email_normal }}</span>
                            <span class="text-danger">{{ message_email_error }}</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="icon-lock iconfont"></i></span>
                            <input id="register_password" type="password" class="form-control input-lg"
                                   v-model="password" placeholder="密码" required>
                        </div>
                        <div id="register_password_message" class="input-message">
                            &nbsp;&nbsp;
                            <span class="text-success">{{ message_password_normal }}</span>
                            <span class="text-danger">{{ message_password_error }}</span></div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="icon-lock iconfont"></i></span>
                            <input id="register_confirm_password" type="password" class="form-control input-lg"
                                   @blur="check_password" v-model="confirm_password" placeholder="确认密码" required>
                        </div>
                        <div id="register_confirm_password_message" class="input-message">
                            &nbsp;&nbsp;
                            <span class="text-success">{{ message_confirm_password_normal }}</span>
                            <span class="text-danger">{{ message_confirm_password_error }}</span>
                        </div>
                        <br>
                        <br>
                        <button class="btn btn-primary btn-lg btn-block" type="submit" id="register_button">注册</button>
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
                email: 'a@b.com',
                password: 'password',
                confirm_password: 'password',
                form_valid: false,

                message_email_normal: '',
                message_email_error: '',
                message_password_normal: '',
                message_password_error: '',
                message_confirm_password_normal: '',
                message_confirm_password_error: '',
            };
        },
        computed:
            {

            },
        methods:
            {
                register: function()
                {
                    this.check_password();

                    if( ! this.form_valid)
                    {
                        return;
                    }

                    const self = this;
                    const register_form = document.getElementById('register_form');

                    userSDK.register(this.email, this.password)
                        .then(function(result)
                        {
                            result = JSON.parse(result);
                            if(result.status === 'ok')
                            {
                                alert('注册成功');
                                register_form.reset();
                                $("#modal_register").modal('hide');
                            }
                            else
                            {
                                console.log(result);
                            }
                        }, function(err)
                        {
                            console.log(err);
                        })
                },
                check_email: function()
                {
                    const self = this;

                    self.form_valid = false;

                    userSDK.exist.email(this.email)
                        .then(function(result)
                        {
                            result = JSON.parse(result);
                            if(result.status === 'ok')
                            {
                                if(result.message)
                                {
                                    self.error_message_email('该email已存在');
                                }
                                else
                                {
                                    self.normal_message_email('OK');
                                    self.form_valid = true;
                                }
                            }
                            else
                            {
                                console.log(result);
                            }
                        });
                },
                check_password: function()
                {
                    if(this.password !== this.confirm_password)
                    {
                        this.error_message_confirm_password('两次输入的密码不同');
                        self.form_valid = false;
                    }
                    else
                    {
                        this.normal_message_confirm_password('OK');
                        self.form_valid = true;
                    }
                },
                error_message_email: function(message)
                {
                    this.message_email_normal = '';
                    this.message_email_error = message;
                },
                normal_message_email: function(message)
                {
                    this.message_email_error = '';
                    this.message_email_normal = message;
                },
                error_message_password: function(message)
                {
                    this.message_password_normal = '';
                    this.message_password_error = message;
                },
                normal_message_password: function(message)
                {
                    this.message_password_error = '';
                    this.message_password_normal = message;
                },
                error_message_confirm_password: function(message)
                {
                    this.message_confirm_password_normal = '';
                    this.message_confirm_password_error = message;
                },
                normal_message_confirm_password: function(message)
                {
                    this.message_confirm_password_error = '';
                    this.message_confirm_password_normal = message;
                },
            }
    }
</script>
<style scoped>
</style>