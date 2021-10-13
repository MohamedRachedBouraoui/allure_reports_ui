import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}
  transform(url:string) {

    return this.sanitizer.bypassSecurityTrustResourceUrl( url);
    // return this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, url);
  }
}
