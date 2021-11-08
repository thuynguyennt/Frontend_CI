import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardItemComponent } from './card-item.component';



@NgModule({
  declarations: [CardItemComponent],
  imports: [
    HttpClient
  ],
  exports: [
    CardItemComponent
  ]
})
export class CardItemModule { }
