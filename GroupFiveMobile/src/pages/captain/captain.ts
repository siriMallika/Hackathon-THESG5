import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CaptainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-captain',
  templateUrl: 'captain.html',
})
export class CaptainPage {
  message: string[] = [];
  question: number[] = [1, 1, 1, 1];
  answer: number[] = [1, 1, 1, 1];
  isWin: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.newGame();
  }

  newGame() {
    this.question[0] = Math.floor(Math.random() * 4) + 1;
    this.question[1] = Math.floor(Math.random() * 4) + 1;
    this.question[2] = Math.floor(Math.random() * 4) + 1;
    this.question[3] = Math.floor(Math.random() * 4) + 1;
    this.answer = [1, 1, 1, 1];
    this.isWin = false;
  }

  clean() {
    this.message = [];
  }

  changeAns(index: number) {
    if (this.answer[index] >= 4)
      this.answer[index] = 1;
    else
      this.answer[index] += 1;
    console.log(this.answer[index]);
  }

  answerQuest() {
    var i = 0;
    var haveNumber = 0;
    var currentNumber = 0;
    var ignore = [0, 0, 0, 0];
    var quest = this.question;
    for (i; i < 4; i++) {
      if (this.answer[i] == quest[i]) {
        currentNumber++;
        ignore[i] = 1;
      }
    }
    for (i = 0; i < 4; i++) {
      if (ignore[i] == 0) {
        if (this.answer[i] == quest[0] && ignore[0] == 0) {
          haveNumber++;
          ignore[0] = 1;
        }
        else if (this.answer[i] == quest[1] && ignore[1] == 0) {
          haveNumber++;
          ignore[1] = 1;
        }
        else if (this.answer[i] == quest[2] && ignore[2] == 0) {
          haveNumber++;
          ignore[2] = 1;
        }
        else if (this.answer[i] == quest[3] && ignore[3] == 0) {
          haveNumber++;
          ignore[4] = 1;
        }
      }
    }
    if (currentNumber == 4){ this.isWin = true; this.message.push("คุณชนะ");}
    else this.message.push("ตัวเลขถูกต้อง " + currentNumber + " ตัว ผิดตำแหน่ง " + haveNumber + " ตัว");
    console.log(this.question);
  }
}

