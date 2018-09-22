import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoardListPage } from './board-list';

@NgModule({
  declarations: [
    BoardListPage,
  ],
  imports: [
    IonicPageModule.forChild(BoardListPage),
  ],
})
export class BoardListPageModule {}
