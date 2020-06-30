import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../../model/post';
import { Comment } from '../../model/comment';
import { CommentProvider } from '../../providers/comments/comment.service';
import { ModalController } from 'ionic-angular';
import { DialogBoxComponent } from '../dialog-box.modal/dialog-box.modal';
import { ProfileConstants } from '../../shared/constants/constants';

@Component({
  selector: 'comment',
  templateUrl: 'comment.html'
})

export class CommentComponent implements OnInit{
  private _comment: Comment;
  owner = false;
  @Input() get comment() {
    return this._comment;
  }

  set comment(value) {
    if (value) {
      this._comment = value;
    }
  }

  @Output() reloadComments: EventEmitter<any> = new EventEmitter();


  constructor(private commentProvider: CommentProvider,
              private modalController: ModalController) { }

  ngOnInit() {
    this.owner = this.comment.UserId === ProfileConstants.USERID;
  }

  deleteComment() {
    if (this.commentProvider.delete(this.comment)) {
      this.reloadComments.emit();
    }
    else {
      alert("Can't delete post at the moment. Please try again.")
    }
  }

  edit() {
    let modal = this.modalController.create(DialogBoxComponent, {
      Content: this.comment.Content
    });

    modal.onDidDismiss(data => {
      if (data) {
        this.comment.Content = data.Content;
        if (!this.commentProvider.update(this.comment)) {
          alert('Can\'t update comment at the moment');
        }
      }
    })

    modal.present();
  }
}
