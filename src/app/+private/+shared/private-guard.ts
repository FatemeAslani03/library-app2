import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

//دستور ایجاد guard
// ng g guard name

export const privateGuard: CanActivateFn = (route, state) => {
  if(sessionStorage.getItem('auth-token')){
    return true;
  }
  if(localStorage.getItem('auth-token')){
    sessionStorage.setItem('auth-token', localStorage.getItem('auth-token')??'')
    //?? یعنی اگه سمت چپ من ondefinite
    //''سمت راست منو قرار بده داخل اون متغییر
    //این باعث میشه خطاهاش برطرف بشه
  return true;
  }
  const router=inject(Router)
  router. navigateByUrl('/login')
  return false;
};


// برای کار کردن این guard
// دستور زیر را در app.routes میزنیم
// canActivate:[privateGuard]