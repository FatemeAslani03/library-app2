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
  if(this.state=='add'){
  this.booksServise.add(this.item);
  }
  else if (this.state=='edit'){
    this.booksServise.edit(this.item)
  }
  else if (this.state=='remove'){
    this.booksServise.remove(this.item)
  }
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
    title:'',
    writer:'',
    publisher:'',
  }
  booksServise=inject(BooksService);
  state:string='list';
  dataRefresh(){
  this.data=this.booksServise.list();
}
add() {
  this.state='add';

  //این تابع زیر برای هست بعد اضافه کردن خالی بشه برای اضافه کردن بعدی
  this.item={
    title:'',
    writer:'',
    publisher:'',
  }  
// 2this.booksServise.add({id:4,title:'ازمایش',writer:'ازمایش',publisher:'ازمایش',price:220000})
// 1this.data.push({id:4,title:'ازمایش',writer:'ازمایش',publisher:'ازمایش',price:220000})
}
edit(book:BookItem){
  this.item={...book};
  this.state='edit';
}
remove(book: BookItem){
  this.item={...book};
  this.state='remove';
}
cancel(){
  this.state='list'
}
}
export interface BookItem{
  id?:number;
  title:string;
  writer:string;
  publisher:string;
  price?:number;
  //برای عدم ضرورت داده متغییر
  //در صورتی که قبل: علامت ؟ قرار بدیم یعنی میشه این متغییر داده نگیرد یعنی یا هیچی یا عدد یا حالا رشته
  //میتونم برای متغییر دو نوع داده تعریف کنیم مثلا: number | string یا number | undefined
}