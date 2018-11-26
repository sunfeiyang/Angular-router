import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // 接收连接中传递过来的参数
  private productId: number;
  private productNanme: string;

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    // 参数订阅 并将参数取出获取其中的id参数赋值给本地的productId
    this.routeInfo.params.subscribe((params: Params) => this.productId = params['id']);
    // snapshot 参数快照
    // 从查询参数中获取内容
    // this.productId = this.routeInfo.snapshot.queryParams['id'];
    // 从url中获取参数
    // this.productId = this.routeInfo.snapshot.params['id'];

    this.routeInfo.data.subscribe((data: {product: Product}) => {
      this.productId = data.product.id;
      this.productNanme = data.product.name;
    });
  }

}
export class Product {
  constructor(public id: number, public name: string) {

  }
}
