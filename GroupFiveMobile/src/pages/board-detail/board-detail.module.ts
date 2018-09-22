import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoardDetailPage } from './board-detail';

@NgModule({
  declarations: [
    BoardDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BoardDetailPage),
  ],
})
export class BoardDetailPageModule {}
