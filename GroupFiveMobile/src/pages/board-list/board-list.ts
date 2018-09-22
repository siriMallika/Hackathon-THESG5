import { BoardDetailPage } from './../board-detail/board-detail';
import { BoardCreatePage } from './../board-create/board-create';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalVarible, Board } from '../../app/models';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-board-list',
  templateUrl: 'board-list.html',
})
export class BoardListPage {

  boards: Board[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
  }

  Create() {
    this.navCtrl.push(BoardCreatePage);
  }

  Detail(id: string) {
    this.navCtrl.push(BoardDetailPage, { id: id });
  }

  ionViewDidEnter() {
    this.http.get<Board[]>(GlobalVarible.host + "/api/Board/List")
      .subscribe(data => {
        this.boards = data;
      });
  }
}
