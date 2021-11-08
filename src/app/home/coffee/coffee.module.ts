import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoffeeComponent } from './coffee.component';
import { Product } from 'src/app/models/Product';
import { CommonModule } from '@angular/common';
 
@NgModule({
    declarations: [
        CoffeeComponent,
    ],
    imports: [
        HttpClientModule,
        CommonModule
    ],
    providers: [],
    bootstrap: [CoffeeComponent]
})
export class CoffeeModule { }