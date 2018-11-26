import {CanActivate} from '@angular/router';

export class LoginGuard implements CanActivate {
  canActivate() {
    // 登陆守卫 此处判断登陆是根据生成一个0-1中间的随机数，小于0.5未登录，大于0.5即为登陆
    const loggeIn: boolean = Math.random() < 0.5;
    console.log('loggeIn--' + loggeIn);
    if (!loggeIn) {
      console.log('用户未登录！');
    }
    return loggeIn;
  }

}
