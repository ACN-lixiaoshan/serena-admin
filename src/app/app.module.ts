import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 当打包部署静态包时，需要加载本Module，当使用服务端渲染时，请注释
import { SPAModule } from '../pages/spa.module';

// 加及初始化 数据接口封装库
import { Parse } from '../cloud/parse'
Parse.initialize("dev","http://host.qh-class.com:2337/parse")

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-lazyload-starter'}),
    AppRoutingModule,
    HttpModule,
    SPAModule, // 静态打包时加载
  ],
  providers: [],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
