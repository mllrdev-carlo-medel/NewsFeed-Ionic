import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { NewsFeedModule } from '../pages/news-feed/news-feed.module';
import { ProvidersModule } from '../providers/providers.module';
import { PostProvider } from '../providers/post/post.service';
import { CommentProvider } from '../providers/comments/comment.service';
import { DialogBoxComponent } from '../components/dialog-box.modal/dialog-box.modal';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ProvidersModule,
    NewsFeedModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DialogBoxComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostProvider,
    CommentProvider
  ]
})
export class AppModule {}
