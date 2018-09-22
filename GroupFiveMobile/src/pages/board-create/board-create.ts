import { Board, GlobalVarible } from './../../app/models';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-board-create',
  templateUrl: 'board-create.html',
})
export class BoardCreatePage {

  Board: Board = new Board();

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
  }

  Create() {
    console.log('svavs');
    this.http.post(GlobalVarible.host + "/api/Board/Create", JSON.stringify(this.Board), GlobalVarible.httpOptions)
      .subscribe(data => {
        this.navCtrl.pop();
      });
  }

}
