import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PostComponent } from './post/post';
import { CommentComponent } from './comment/comment';
import { DialogBoxComponent } from './dialog-box.modal/dialog-box.modal';


@NgModule({
	declarations: [ PostComponent, CommentComponent, DialogBoxComponent ],
	imports: [ IonicModule ],
  exports: [ PostComponent, CommentComponent ],
  entryComponents: [ DialogBoxComponent ]
})
export class ComponentsModule {}
