import {CanDeactivate} from '@angular/router';
import {ProductComponent} from '../product/product.component';
// 未保存守卫，确保用户执行保存操作 CanDeactivate种泛型为要保护的类型 ProductComponent
export class UnsavedGuard implements CanDeactivate<ProductComponent> {
  canDeactivate(component: ProductComponent) {
    return window.confirm('你还没有保存，确定要离开吗？');
  }

}
