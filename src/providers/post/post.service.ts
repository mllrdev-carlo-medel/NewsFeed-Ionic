import { Injectable } from '@angular/core';
import { Post } from '../../model/post';

@Injectable()
export class PostProvider {
  private _posts: Post[] = [
    {
      Id: 2,
      UserId: 1,
      Name: "carlo medel",
      Content: "Nice weather!\n#Sunny",
      Date: "2020/05/31 8:26:19 AM"
    },
    {
      Id: 1,
      UserId: 2,
      Name: "jane robredo",
      Content: "Good day!\n#GoodMood",
      Date: "2020/06/29 1:26:19 PM"
    },
    {
      Id: 3,
      UserId: 3,
      Name: "sheila mae",
      Content: "Where can I learn angular?\n\n#angular",
      Date: "2020/06/30 9:26:19 AM"
    }
  ];

  getAll() {
    return this._posts;
  }

  create(post: Post) {
   return this._posts.push(post) > 0 ? true : false;
  }

  getById(id: number) {
    return this._posts.filter(post => {
      return post.Id === id;
    })
  }

  update(post: Post) {
    const oldPost = this._posts.find(oldPost => oldPost.Id === post.Id )

    if (oldPost.Id === post.Id) {
      oldPost.Content = post.Content;
      oldPost.Date = post.Date;
      return true;
    }
    else {
      return false;
    }
  }

  delete(post: Post) {
    if (this._posts.splice(this._posts.indexOf(post), 1)){
      return true;
    }
    else {
      return false;
    }
  }
}
