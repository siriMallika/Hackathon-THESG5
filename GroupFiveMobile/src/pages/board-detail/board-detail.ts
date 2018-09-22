import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Board, GlobalVarible, Post } from '../../app/models';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-board-detail',
  templateUrl: 'board-detail.html',
})
export class BoardDetailPage {

  Board: Board = new Board();
  Post: Post = new Post();

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
  }

  Comment() {
    this.http.post(GlobalVarible.host + "/api/Board/Post/" + this.navParams.data.id, JSON.stringify(this.Post), GlobalVarible.httpOptions)
      .subscribe(data => {
        this.ionViewDidEnter();
      });
  }

  ionViewDidEnter() {
    this.http.get<Board>(GlobalVarible.host + "/api/Board/Get/" + this.navParams.data.id)
      .subscribe(data => {
        console.log(data);
        this.Board = data;
      });
  }
}
