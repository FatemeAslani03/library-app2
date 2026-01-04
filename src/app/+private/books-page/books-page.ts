import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books-page',
  imports: [FormsModule],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage implements OnInit{
save() {
  this.booksServise.add(this.item);
  this.dataRefresh();
  this.state='list';
}

  //implements OnInit
  //برای اینکه با شروع این کامپوننت تابع شروع به کار کردن کنه
  ngOnInit(): void {
  this.dataRefresh();
  }

  // data:BookItem[]=[
  //   {id:1,title:'کیمیاگر',writer:'پائولو',publisher:'انتشاراتی مجید',price:190000},
  //   {id:2,title:'نشخوار ذهنی',writer:'ایتن کراس',publisher:'سراج بوک',price:170000},
  //   {id:3,title:'دختر پرتغالی',writer:'یوستین',publisher:'یوشیتا',price:220000},
  // ];
//اول فرانت با داده مارک میسازه
//اول باید interface BookItem ایجاد شود تا بتوان داده داد
// درستش اینکه این داده‌های مارک تو سرویس باشه
//از کامپوننت کتاب ترمینال و کد زیر
//ng g service name مثلا به جای نام اینجا BooksService
 
  data:BookItem[]=[];
  item:BookItem={
    id:0,
    title:'',
    writer:'',
    publisher:'',
    price:0,
  }
  booksServise=inject(BooksService);
  state:string='list';
  dataRefresh(){
  this.data=this.booksServise.list();
}
add() {
  this.state='add';
  // 2this.booksServise.add({id:4,title:'ازمایش',writer:'ازمایش',publisher:'ازمایش',price:220000})
  // 1this.data.push({id:4,title:'ازمایش',writer:'ازمایش',publisher:'ازمایش',price:220000})
}
cancel(){
  this.state='list'
}
}
export interface BookItem{
  id:number;
  title:string;
  writer:string;
  publisher:string;
  price:number;
  //برای عدم ضرورت داده متغییر
  //در صورتی که قبل: علامت ؟ قرار بدیم یعنی میشه این متغییر داده نگیرد
}