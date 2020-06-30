import { NgModule } from '@angular/core';
import { PostProvider } from './post/post.service';
import { CommentProvider } from './comments/comment.service';
import { SorterProvider } from './sorter/sorter.service';

@NgModule({
  providers: [ PostProvider, CommentProvider, SorterProvider ]
})
export class ProvidersModule {}
