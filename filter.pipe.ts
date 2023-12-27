// import { Pipe, PipeTransform } from '@angular/core';
// import { filter } from 'rxjs';

// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {

//   transform(value : any[], filterString: string, MovieName:string, ShortDescript:string): any[]  {
//     const result:any =[];
//     if(!value || filterString==='' || MovieName ===''|| ShortDescript ===''){
//       return value
//     }
//     value.forEach((a:any)=>{
//       if(a[MovieName].trim().toLowerCase().includes(filterString.toLowerCase())){
//         result.push(a);
//       }
//     });
//     return result;
//   }

// }
