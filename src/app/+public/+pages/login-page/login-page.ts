import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  //نوع نام گذاری کلاس: camelcase
  // خط پایینی برای جا به جایی بین صفحات است
  router=inject(Router);
  message:string='';
  loginForm:LoginForm={
  username:'',
  password:'',
  keepMe:false
};
check(){
  if(this.loginForm.username=='Fateme' && this.loginForm.password=='Fateme'){
    sessionStorage.setItem('auth-token','safjijelauiffwrwsfusfaaafa')
    if (this.loginForm.keepMe==true){
      localStorage.setItem('auth-token','safjijelauiffwrwsfusfaaafa')
      //localStorage برای پایدار ذخیره شدن
    }
    this.router.navigateByUrl('private')
  }
  else{
  this.message='نام کاربری یا کلمه عبور اشتباه است';
  }
}
}
interface LoginForm{
  username:string;
  password:string;
  keepMe:boolean;
}
// فرق class & interface
// متغییر تعریف شده در کلاس حتما باید داده بگيرد