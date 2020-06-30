import { Injectable } from '@angular/core';
import { Comment } from '../../model/comment';

@Injectable()
export class CommentProvider {
  private _comments: Comment[] = [
    {
      Id: 1,
      PostId: 1,
      UserId: 2,
      Name: "jane robredo",
      Content: "Indeed. Fancy a cup of coffee?",
      Date: "2020-06-30 11:26:19.000"
    },
    {
      Id: 2,
      PostId: 1,
      UserId: 3,
      Name: "sheila mae",
      Content: "Ikr. Let's go out.",
      Date: "2020-06-29 8:26:19.000"
    },
    {
      Id: 3,
      PostId: 2,
      UserId: 2,
      Name: "jane rebredo",
      Content: "Nice.",
      Date: "2020-06-30 9:26:19.000"
    }
  ];

  getAll() {
    return this._comments;
  }

  getById(id: number) {
    return this._comments.filter((comment: Comment) => {
      return comment.PostId === id;
    });
  }

  create(comment: Comment) {
    return this._comments.push(comment) > 0 ? true : false;
  }

  update(comment: Comment) {
    const oldComment = this._comments.find(oldComment => oldComment.Id === comment.Id)

    if (oldComment.Id === comment.Id) {
      oldComment.Content = comment.Content;
      oldComment.Date = comment.Date;
      return true;
    }
    else {
      return false;
    }
  }

  delete(comment: Comment) {
    if (this._comments.splice(this._comments.indexOf(comment), 1)){
      return true;
    }
    else {
      return false;
    }
  }
}
