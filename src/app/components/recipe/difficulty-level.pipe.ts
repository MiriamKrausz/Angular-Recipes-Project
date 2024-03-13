import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'difficultyLevel',
  standalone: true
})
export class DifficultyLevelPipe implements PipeTransform {

  transform(difficultyLevel: number): string {
    let result = '';
    for (let i = 0; i < 5; i++) {
      if (i < difficultyLevel) {
        result += '★'; // כוכב מלא
      } else {
        result += '☆'; // כוכב ריק
      }
    }
    return result;
  }

}
