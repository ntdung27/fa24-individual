import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: any = [];

  constructor(private http: HttpClient) {}
  ngOnInit() {  
    this.http.get('http://localhost:3000/products').subscribe((data) => {
      this.products = data;
    });
  }

  removeItem(id: any) {
    if (confirm('Are you sure?')) {
      this.http
        .delete('http://localhost:3000/products/' + id)
        .subscribe((data) => {
          alert('Deleted Successfully');
          this.products = this.products.filter((items: any) => items.id != id);
        });
    }
  }
}
