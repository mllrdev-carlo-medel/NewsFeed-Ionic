import { NgModule } from '@angular/core';
import { NewsFeedPage } from './news-feed';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    IonicPageModule.forChild(NewsFeedPage),
    SharedModule,
    CommonModule,
    FormsModule
  ],
  declarations: [ NewsFeedPage ]
})

export class NewsFeedModule { }
