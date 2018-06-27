import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyADBHO6oxXGQv3PaWe6cZfewHDgvosMjgw';
  private playListCode = 'PL0cWlOyqP6_MEzoQEhqom8WhozWLiJm1t';
  private nextPageToken = 'CAoQAA';

  constructor(public http: HttpClient) { }

  getVideos() {
    const url = `${this.youtubeUrl}/playlistItems`;
    let params = new HttpParams();

    params = params.set('part', 'snippet');
    params = params.set('maxResults', '10');
    params = params.set('playlistId', this.playListCode);
    params = params.set('key', this.apiKey);

    if (this.nextPageToken) {
      params.set('pageToken', this.nextPageToken);
    }

    return this.http.get(url, {params: params}).pipe(map(
                        (response: any) => {
                          this.nextPageToken = response.nextPageToken;
                          return response.items.map(video => video.snippet);
                        }));
  }
}
