import { GlobalVarible } from './../../app/models';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BoardListPage } from '../board-list/board-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string;

  constructor(public navCtrl: NavController) {

  }

  logIn(){
    GlobalVarible.username = this.username;
    this.navCtrl.push(BoardListPage);
  }

}
