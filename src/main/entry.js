const user = {};

user.exist = {};
import email from './module/exist/email';
user.exist.email = email;
import nickname from './module/exist/nickname';
user.exist.nickname = nickname;
import tel from './module/exist/tel';
user.exist.tel = tel;
import username from './module/exist/username';
user.exist.username = username;

user.get = {};

import profile from './module/get/profile';
user.get.profile = profile;

user.sign = {};
user.sign.in = {};
user.sign.up = {};

import password from './module/sign/in/password';
user.sign.in.password = password;

import email_1 from './module/sign/up/email';
user.sign.up.email = email_1;

export default user;

window['www---vanging---com___sdk___user'] = user;