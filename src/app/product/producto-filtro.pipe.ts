import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from './producto';

@Pipe({
  name: 'productoFiltro'
})
export class ProductoFiltroPipe implements PipeTransform {

  transform(value: Producto[],args:string): Producto[] {
    let filter:string= args ?  args.toLocaleLowerCase():'';

    return filter ? value.filter((product:Producto)=>
    product.Marca.toLocaleLowerCase().indexOf(filter)!=-1
    ):value;
  }

}
