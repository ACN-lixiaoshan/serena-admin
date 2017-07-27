import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  users:Array<any> = [
    {"index":1,
     "name":"罗子君",
     "sex":"女",
     "age":18,
     "nickname":"你猜",
     "telphone":123456,
     "address":"辽宁省大连市",
     "level":"A"},
     {"index":2,
     "name":"贺涵",
     "sex":"男",
     "age":20,
     "nickname":"巨婴",
     "telphone":654321,
     "address":"辽宁省大连市",
     "level":"A"},
     {"index":3,
     "name":"唐晶",
     "sex":"女",
     "age":19,
     "nickname":"呲花",
     "telphone":864890,
     "address":"辽宁省大连市",
     "level":"B"},
     {"index":4,
     "name":"卓渐清",
     "sex":"男",
     "age":28,
     "nickname":"大雄",
     "telphone":839095,
     "address":"辽宁省大连市",
     "level":"B"},
     {"index":5,
     "name":"陈俊生",
     "sex":"男",
     "age":23,
     "nickname":"零驷妖妖",
     "telphone":849354,
     "address":"辽宁省大连市",
     "level":"C"},
     {"index":6,
     "name":"凌玲",
     "sex":"女",
     "age":25,
     "nickname":"雄大",
     "telphone":849302,
     "address":"辽宁省大连市",
     "level":"C"}
  ]
deleteLast(){
  this.users.pop()
}
saveNewUser(){
  this.users.push({
     "index":666,
     "name":"不详",
     "sex":"不详",
     "age":"不详",
     "nickname":"不详",
     "telphone":"不详",
     "address":"不详",
     "level":"不详",
  })
}
  sortByAsccending(){
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.users.sort(function (a, b) {
      if (a.index > b.index) {
        return 1;
      }
      if (a.index < b.index) {
        return -1;
      }
      return 0;
    });
  }
  sortByDesccending(){
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.users.sort(function (a, b) {
      if (a.index > b.index) {
        return -1;
      }
      if (a.index < b.index) {
        return 1;
      }
      return 0;
    });
  }
  sortByRadom(){
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    this.users.sort(function (a, b) {
      if (5 > Math.random() * 10) {
        return -1;
      }
      if (5 < Math.random() * 10) {
        return 1;
      }
      return 0;
    });
  }

  constructor(meta: Meta, title: Title) {
    title.setTitle('My Home Page');

    meta.addTags([ 
      {
        name: 'author', content: 'eddic'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ])
  }

  ngOnInit() {
  }

}
