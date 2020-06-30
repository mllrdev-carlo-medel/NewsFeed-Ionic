import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../model/post';
import { Comment } from '../../model/comment';
import { CommentProvider } from '../../providers/comments/comment.service';
import { PostProvider } from '../../providers/post/post.service';
import { AlertController, ModalController } from 'ionic-angular';
import { DialogBoxComponent } from '../dialog-box.modal/dialog-box.modal';
import { ProfileConstants } from '../../shared/constants/constants';
import { SorterProvider } from '../../providers/sorter/sorter.service';

@Component({
  selector: 'post',
  templateUrl: 'post.html'
})
export class PostComponent implements OnInit{
  private _post: Post;
  comments: Comment[] = [];
  comment: string = "";
  hideComments = true;
  owner = false;
  @Input() get post() {
    return this._post;
  }

  set post(value) {
    if (value) {
      this._post = value;
    }
  }

  constructor(private commentProvider: CommentProvider,
              private postProvider: PostProvider,
              private modalController: ModalController,
              private sorterProvider: SorterProvider) { }

  ngOnInit() {
    this.owner = this.post.UserId === ProfileConstants.USERID;
    this.getComments();
  }

  getComments() {
    let comments = this.commentProvider.getById(this.post.Id);
    this.sorterProvider.sort(comments, "Date");
    this.comments = comments;
  }

  async edit() {
    let modal = this.modalController.create(DialogBoxComponent, {
      Content: this.post.Content
    });

    modal.onDidDismiss(data => {
      if (data) {
        this.post.Content = data.Content;
        if (!this.postProvider.update(this.post)) {
          alert('Can\'t update post at the moment');
        }
      }
    })

    modal.present();
  }

  deletePost() {
    const comments = this.commentProvider.getById(this.post.Id);
    comments.forEach(value => {
      this.commentProvider.delete(value);
    })

    if (!this.postProvider.delete(this.post)) {
      alert("Can't delete post at the moment. Please try again.")
    }
  }

  postComment() {
    if (this.comment && this.comment.trim().length > 0) {
      const comment = new Comment();
      comment.Id = this.commentProvider.getAll().length + 1;
      comment.Content = this.comment;
      comment.Date = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
      comment.Name = ProfileConstants.NAME;
      comment.PostId = this.post.Id;
      comment.UserId =ProfileConstants.USERID;
      if (this.commentProvider.create(comment)) {
        this.comment = "";
        this.getComments();
      }
      else {
        this.comment = "";
        alert("Can\'t comment at the moment.");
      }
    }
    else {
      this.comment = "";
      alert("Please write a comment first");
    }
  }

  showComments() {
    this.hideComments = !this.hideComments;
  }
}
