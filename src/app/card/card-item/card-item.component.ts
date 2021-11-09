import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  // private subscription!: Subscription;

  @Input() items: any = [];

  constructor(private coffeService: CoffeeService) {

   }

  ngOnInit(): void {
  }

  // getAllProduct() {
  //   this.subscription = this.coffeService.getAllProduct().subscribe(data => {
  //     this.products = data;
  //   }), (error: any) => {
  //     console.log(error)
  //   }
  // }
}
