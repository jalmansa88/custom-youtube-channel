import { Component } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent {

  videos: any[] = [];
  videoSelected: any;

  constructor(public ytService: YoutubeService) {
    this.ytService.getVideos()
        .subscribe(videos => this.videos = videos );
  }

  verVideo (video) {
      this.videoSelected = video;
      $('#videoModal').modal();
      $('#videoModal').on('hide.bs.modal', argumentos => {
        this.videoSelected = null;
     });
  }

  cargarMas() {
    this.ytService.getVideos()
      .subscribe(videos => this.videos.push.apply(this.videos, videos));
  }

}
