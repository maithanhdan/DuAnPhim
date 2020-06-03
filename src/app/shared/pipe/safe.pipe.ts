import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) { }

  public transform(value: any, type: string) {
    switch (type) {
      case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
      default: throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
}