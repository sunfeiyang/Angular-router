import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Product} from '../product/product.component';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable( )
// 改类必须有该注解装饰
export class ProductResolve implements Resolve<Product> {

  constructor(private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> | Promise<Product> | Product {
    const productId: number = route.params['id'];

    if (productId == 1) {
      return new Product(1, '77777777');
    } else {
      this.router.navigate(['/home']);
      return undefined;
    }
  }

}
