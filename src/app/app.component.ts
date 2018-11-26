import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router';
  // 如下处理即可获得一个router对象
  constructor(private router: Router) {

  }
  toProductDetails() {
    this.router.navigate(['/product', 2]);
  }
}
