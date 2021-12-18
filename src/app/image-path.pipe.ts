import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePathPipe'
})
export class ImagePathPipePipe implements PipeTransform {

  transform(value: string): string {
    return `url(./images/${value})`;
  }

}
