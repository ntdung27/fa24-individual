import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './products.service';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../interfaces/IProduct';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

//   p: IProduct = {
//     name: '',
//     price: 1000,
//   };

//   onHandleSubmit() {
//     console.log(this.p);
//   }

  // ! using Service of Products
  //   constructor(private productService: ProductsService) {}
  //   ngOnInit() {
  //     this.productService.getProducts().subscribe((data) => {
  //         console.log(data);

  //     })
  //   }
}
