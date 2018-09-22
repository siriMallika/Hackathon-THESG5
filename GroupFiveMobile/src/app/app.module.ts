import { BoardDetailPage } from './../pages/board-detail/board-detail';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
<<<<<<< HEAD
=======
import { BoardListPage } from '../pages/board-list/board-list';
import { HttpClient, HttpClientModule } from '@angular/common/http';
>>>>>>> c0f4bcdfff6ab608bb0849ddfcf683fee5ab5078
import { BoardCreatePage } from '../pages/board-create/board-create';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
<<<<<<< HEAD
    BoardCreatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
=======
    BoardListPage,
    BoardCreatePage,
    BoardDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
>>>>>>> c0f4bcdfff6ab608bb0849ddfcf683fee5ab5078
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
<<<<<<< HEAD
    BoardCreatePage
=======
    BoardListPage,
    BoardCreatePage,
    BoardDetailPage
>>>>>>> c0f4bcdfff6ab608bb0849ddfcf683fee5ab5078
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
