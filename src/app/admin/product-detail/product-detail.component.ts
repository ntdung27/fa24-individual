import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
    product: any;
    constructor(private http: HttpClient, private activeRouter: ActivatedRoute) {}
    ngOnInit() {
        const { id } = this.activeRouter.snapshot.params;
        this.http.get(`http://localhost:3000/products/${id}`).subscribe(data => {
            this.product = data
        })
    }
}
