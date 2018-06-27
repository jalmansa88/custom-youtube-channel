import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { YoutubeService } from './services/youtube.service';
import { HttpClientModule } from '@angular/common/http';
import { VideoYTPipe } from './pipes/video-yt.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    VideoYTPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
