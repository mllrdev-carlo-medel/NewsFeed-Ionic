import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController, ModalController } from 'ionic-angular';

@Component({
  selector: 'dialog-box',
  templateUrl: 'dialog-box.html'
})
export class DialogBoxComponent implements OnInit {
  content: string = "";

  constructor(private params: NavParams,
              private viewCtrl: ViewController,
              private modalCtrl: ModalController) {
    this.content = this.params.get("Content");
  }

  ngOnInit() {}

  dismiss() {
    this.viewCtrl.dismiss();
  }

  save() {
    if (this.content && this.content.trim().length > 0) {
      const data = {"Content": this.content}
      this.viewCtrl.dismiss(data);
    }
    else {
      this.content = this.params.get("Content");
      alert("Please write something first");
    }
  }
}
