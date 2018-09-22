import { BoardDetailPage } from './../pages/board-detail/board-detail';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CaptainPage } from '../pages/captain/captain';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BoardListPage } from '../pages/board-list/board-list';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BoardCreatePage } from '../pages/board-create/board-create';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BoardCreatePage,
    BoardListPage,
    BoardCreatePage,
    BoardDetailPage,
    CaptainPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BoardCreatePage,
    BoardListPage,
    BoardCreatePage,
    BoardDetailPage,
    CaptainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
