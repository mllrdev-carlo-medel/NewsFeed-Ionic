import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post/post.service';
import { Post } from '../../model/post';
import { SorterProvider } from '../../providers/sorter/sorter.service';
import { ProfileConstants } from '../../shared/constants/constants';

@Component({
  selector: 'news-feed',
  templateUrl: 'news-feed.html'
})
export class NewsFeedPage implements OnInit {
  posts: Post[] = [];

  content: string = "";

  constructor(private postProvider: PostProvider,
              private sorterProvider: SorterProvider) {}

  ngOnInit() {
    let posts = this.postProvider.getAll();
    this.sorterProvider.sort(posts, "Date");
    this.posts = posts;
  }

  post() {
    if (this.content && this.content.trim().length > 0 ) {
      const post = new Post();
      post.Id = this.postProvider.getAll().length + 1;
      post.UserId = ProfileConstants.USERID;
      post.Name = ProfileConstants.NAME;
      post.Content = this.content;
      post.Date = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
      if (this.postProvider.create(post)) {
        this.content = "";
        this.sorterProvider.sort(this.postProvider.getAll(), "Date");
      }
      else {
        this.content = "";
        alert('Can\'t create post at the moment');
      }
    }
    else {
      this.content = "";
      alert ("Please write something first.");
    }
  }
}
