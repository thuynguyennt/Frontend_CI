import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  private readonly API_URL = "http://localhost:3000/products";

  constructor(private http: HttpClient){

  }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL);
  }
}
