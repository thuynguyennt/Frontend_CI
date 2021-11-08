import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-coffee',
  templateUrl: './home-coffee.component.html',
  styleUrls: ['./home-coffee.component.scss']
})
export class HomeCoffeeComponent implements OnInit {
  
  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  homes: Home[] = [
    {
      "img": "https://www.highlandscoffee.com.vn/vnt_upload/weblink/HCO-7548-PHIN-SUA-DA-2019-TALENT-WEB_1.jpg",
      "add": "KHÁM PHÁ THÊM"
    },
    {
      "img": "http://localhost:4200/assets/theme/web_1.png",
      "add": "KHÁM PHÁ THÊM"
    },
    {
      "img": "https://www.highlandscoffee.com.vn/vnt_upload/weblink/HCO-7605-FESTIVE-2020-WEB-FB-2000X639_1.png",
      "add": "KHÁM PHÁ THÊM"
    }
  ]

  addbtn() {
    this.router.navigate(['/discover']);
  }
}
export interface Home {
  img: string;
  add: string;
}
