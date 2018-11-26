import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {Code404Component} from './code404/code404.component';
import {SellerInfoComponent} from './seller-info/seller-info.component';
import {ProdectDescComponent} from './prodect-desc/prodect-desc.component';
import {ChatComponent} from './chat/chat.component';
import {LoginGuard} from './guard/login.guard';
import {UnsavedGuard} from './guard/unsaved.guard';
import {ProductResolve} from './guard/product.resolve';

// 配置路由时，path中不加斜杠，方便Angular更加灵活的使用相对路径和绝对路径
const routes: Routes = [
  // 将空字符串的路由重定向到home
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  // 辅助路由
  {path: 'chat', component: ChatComponent, outlet: 'aux'},
  {path: 'home', component: HomeComponent},
  // 前一个为普通的路由，后一个表示可以携带一个参数的路由
  {path: 'product', component: ProductComponent},
  // canActivate 为一个路由守卫 根据返回值，判断是否可以访问该路由
  {path: 'product/:id', component: ProductComponent, children: [
    {path: '', component: ProdectDescComponent}, {path: 'seller/:id', component: SellerInfoComponent}
  ], canActivate: [LoginGuard],
    canDeactivate: [UnsavedGuard],
    resolve: {
      product: ProductResolve
  }},
  // 配置404页面 （路由匹配是顺序匹配，所以要把通配符路由放在路由配置的最后）
  {path: '**', component: Code404Component}
];

// providers 此处需要实例化 钩子
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard, UnsavedGuard,ProductResolve]
})
export class AppRoutingModule { }
