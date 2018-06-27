import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'videoYT'
})
export class VideoYTPipe implements PipeTransform {

  constructor(private domSanitaizer: DomSanitizer) { }

  transform(value: string): any {

    const url = 'https://www.youtube.com/embed/';

    return this.domSanitaizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
