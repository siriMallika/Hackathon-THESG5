import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Board, GlobalVarible } from '../../app/models';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-board-detail',
  templateUrl: 'board-detail.html',
})
export class BoardDetailPage {

  Board: Board;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
  }

  ionViewDidEnter() {
    this.http.get<Board>(GlobalVarible.host + "/api/Student/Get/" + this.navParams.data.id)
      .subscribe(data => {
        this.Board = data;
      });
  }
}
