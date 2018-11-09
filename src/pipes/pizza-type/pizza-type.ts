import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the PizzaTypePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'pizzaType',
})
export class PizzaTypePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(pizzas: any, type: any) {
    if(!pizzas) return [];
    return pizzas.filter((p) => {
      return p.type == type.type;
    });
  }
}
