import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoardCreatePage } from './board-create';

@NgModule({
  declarations: [
    BoardCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(BoardCreatePage),
  ],
})
export class BoardCreatePageModule {}
